// Fix: Added React import to resolve 'Cannot find namespace React' error
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

export interface StrategyResult {
  industry: string;
  analysis: string;
  recommendations: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}