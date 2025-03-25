"use client";

import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { X, Share2 } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

interface CustomWindow extends Window {
  MSStream?: unknown;
}

export function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if device is iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as CustomWindow).MSStream;
    setIsIOS(isIOSDevice);

    if (!isIOSDevice) {
      const handler = (e: BeforeInstallPromptEvent) => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault();
        // Stash the event so it can be triggered later
        setDeferredPrompt(e);
        // Show the prompt
        setIsVisible(true);
      };

      window.addEventListener('beforeinstallprompt', handler as EventListener);

      return () => {
        window.removeEventListener('beforeinstallprompt', handler as EventListener);
      };
    } else {
      // For iOS, show the prompt after a delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleInstallClick = async () => {
    if (isIOS) {
      // For iOS, show the share sheet
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'Omid Javaheri Portfolio',
            text: 'Check out my portfolio!',
            url: window.location.href,
          });
        } catch (error) {
          console.log('Error sharing:', error);
        }
      }
    } else if (deferredPrompt) {
      // Show the install prompt for other browsers
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      setDeferredPrompt(null);
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-card border border-border rounded-lg shadow-lg p-4 z-50 animate-slideUp">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold">
            {isIOS ? 'Add to Home Screen' : 'Install App'}
          </h3>
          <p className="text-sm text-muted">
            {isIOS 
              ? 'Add this website to your home screen for quick access'
              : 'Install this app on your device for quick access'
            }
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-muted hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="mt-4 flex gap-2">
        <Button
          variant="primary"
          size="sm"
          className="flex-1"
          onClick={handleInstallClick}
        >
          {isIOS ? (
            <div className="flex items-center justify-center gap-2">
              <Share2 className="w-4 h-4" />
              Add to Home Screen
            </div>
          ) : (
            'Install'
          )}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsVisible(false)}
        >
          Not now
        </Button>
      </div>
      {isIOS && (
        <div className="mt-4 text-xs text-muted">
          <p>1. Tap the share button</p>
          <p>2. Scroll down and tap &ldquo;Add to Home Screen&rdquo;</p>
          <p>3. Tap &ldquo;Add&rdquo; to install</p>
        </div>
      )}
    </div>
  );
} 