"use client";

import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { X } from 'lucide-react';

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
      <div className="mt-4">
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