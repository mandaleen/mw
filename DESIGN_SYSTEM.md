# MagicWorld Travel Agency - Complete Design System

## 🎨 Color Palette

### Primary Colors
```css
/* Brand Primary Gradient */
--primary-gradient: linear-gradient(135deg, #08CFCC 0%, #B445EA 100%);
--primary-start: #08CFCC; /* Aqua */
--primary-end: #B445EA;   /* Violet */

/* Hover States */
--primary-hover-start: #07B8B5; /* Darker Aqua */
--primary-hover-end: #A33DD1;   /* Darker Violet */
```

### Neutral Colors
```css
/* Background Colors */
--background-primary: #FFFFFF;    /* Pure White */
--background-secondary: #F8FAFC;  /* Light Gray */
--background-tertiary: #F1F5F9;   /* Lighter Gray */
--footer-background: #F5F5F5;     /* Footer Gray */

/* Text Colors */
--text-primary: #1A1A1A;     /* Dark Gray - Primary Text */
--text-secondary: #4B5563;   /* Medium Gray - Secondary Text */
--text-tertiary: #6B7280;    /* Light Gray - Tertiary Text */
--text-muted: #9CA3AF;       /* Muted Gray - Placeholder Text */
```

### Semantic Colors
```css
/* Success */
--success: #10B981;
--success-light: #D1FAE5;
--success-dark: #047857;

/* Warning */
--warning: #F59E0B;
--warning-light: #FEF3C7;
--warning-dark: #D97706;

/* Error */
--error: #EF4444;
--error-light: #FEE2E2;
--error-dark: #DC2626;

/* Info */
--info: #3B82F6;
--info-light: #DBEAFE;
--info-dark: #1D4ED8;
```

### Glass Effect Colors
```css
/* Glass Morphism */
--glass-background: rgba(255, 255, 255, 0.12);
--glass-border: rgba(255, 255, 255, 0.2);
--glass-shadow: rgba(0, 0, 0, 0.1);
--glass-reflection: rgba(255, 255, 255, 0.3);

/* Liquid Orb Gradients */
--orb-1: linear-gradient(45deg, #08CFCC, #4F46E5);
--orb-2: linear-gradient(135deg, #B445EA, #06B6D4);
--orb-3: linear-gradient(225deg, #8B5CF6, #10B981);
```

## 🔘 Button Design System

### Primary Button (Gradient CTA)
```css
.btn-primary {
  /* Base Styles */
  background: linear-gradient(135deg, #08CFCC 0%, #B445EA 100%);
  color: #FFFFFF;
  font-weight: 600;
  font-size: 1rem;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  
  /* Typography */
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.025em;
  
  /* Effects */
  box-shadow: 
    0 4px 14px rgba(8, 207, 204, 0.25),
    0 2px 8px rgba(180, 69, 234, 0.15);
  
  /* Transitions */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
}

.btn-primary:hover {
  /* Gradient Shift */
  background: linear-gradient(135deg, #07B8B5 0%, #A33DD1 100%);
  
  /* Enhanced Shadow */
  box-shadow: 
    0 8px 25px rgba(8, 207, 204, 0.35),
    0 4px 15px rgba(180, 69, 234, 0.25);
  
  /* Lift Effect */
  transform: translateY(-2px);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: 
    0 2px 8px rgba(8, 207, 204, 0.3),
    0 1px 4px rgba(180, 69, 234, 0.2);
}

.btn-primary:focus {
  outline: 2px solid #08CFCC;
  outline-offset: 2px;
}
```

### Secondary Button (Outline)
```css
.btn-secondary {
  /* Base Styles */
  background: transparent;
  color: #1A1A1A;
  font-weight: 600;
  font-size: 1rem;
  padding: 12px 24px;
  border-radius: 8px;
  border: 2px solid #E5E7EB;
  cursor: pointer;
  
  /* Typography */
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.025em;
  
  /* Transitions */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
}

.btn-secondary:hover {
  /* Border & Text Color */
  border-color: #9CA3AF;
  color: #374151;
  
  /* Background Tint */
  background: rgba(249, 250, 251, 0.8);
  
  /* Lift Effect */
  transform: translateY(-1px);
  
  /* Subtle Shadow */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.btn-secondary:active {
  transform: translateY(0);
  background: rgba(243, 244, 246, 0.9);
}
```

### Glass Button (Header CTA)
```css
.btn-glass {
  /* Base Glass Effect */
  background: linear-gradient(135deg, #08CFCC 0%, #B445EA 100%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  
  /* Typography */
  color: #FFFFFF;
  font-weight: 600;
  font-size: 0.875rem;
  padding: 8px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  
  /* Glass Effects */
  box-shadow: 
    0 8px 32px rgba(8, 207, 204, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  
  /* Transitions */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.btn-glass::before {
  /* Reflection Effect */
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: left 0.6s ease;
}

.btn-glass:hover {
  /* Enhanced Gradient */
  background: linear-gradient(135deg, #07B8B5 0%, #A33DD1 100%);
  
  /* Enhanced Glass Shadow */
  box-shadow: 
    0 20px 40px rgba(8, 207, 204, 0.3),
    0 10px 20px rgba(180, 69, 234, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  
  /* Scale Effect */
  transform: scale(1.05);
}

.btn-glass:hover::before {
  /* Sliding Reflection */
  left: 100%;
}
```

### Icon Button
```css
.btn-icon {
  /* Base Styles */
  background: #F9FAFB;
  color: #6B7280;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #E5E7EB;
  cursor: pointer;
  
  /* Flexbox Centering */
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Transitions */
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-icon:hover {
  /* Gradient Background */
  background: linear-gradient(135deg, #08CFCC 0%, #B445EA 100%);
  color: #FFFFFF;
  border-color: transparent;
  
  /* Shadow */
  box-shadow: 0 4px 12px rgba(8, 207, 204, 0.25);
  
  /* Scale */
  transform: scale(1.1);
}
```

## 📏 Button Sizes

### Large Button
```css
.btn-lg {
  padding: 16px 32px;
  font-size: 1.125rem;
  border-radius: 12px;
  min-height: 56px;
}
```

### Medium Button (Default)
```css
.btn-md {
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 8px;
  min-height: 48px;
}
```

### Small Button
```css
.btn-sm {
  padding: 8px 16px;
  font-size: 0.875rem;
  border-radius: 6px;
  min-height: 36px;
}
```

### Extra Small Button
```css
.btn-xs {
  padding: 6px 12px;
  font-size: 0.75rem;
  border-radius: 4px;
  min-height: 28px;
}
```

## 🎭 Button States

### Loading State
```css
.btn-loading {
  position: relative;
  color: transparent;
  pointer-events: none;
}

.btn-loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 16px;
  margin: -8px 0 0 -8px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

### Disabled State
```css
.btn-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
  transform: none !important;
  box-shadow: none !important;
}
```

## 🏷️ Badge Design System

### Primary Badge
```css
.badge-primary {
  background: linear-gradient(135deg, #08CFCC 0%, #B445EA 100%);
  color: #FFFFFF;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 16px;
  border: none;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.025em;
}
```

### Secondary Badge
```css
.badge-secondary {
  background: #F1F5F9;
  color: #475569;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 16px;
  border: 1px solid #E2E8F0;
  font-family: 'Poppins', sans-serif;
}

.badge-secondary:hover {
  background: #E2E8F0;
  border-color: #CBD5E1;
  transform: scale(1.05);
  transition: all 0.2s ease;
}
```

## 🃏 Card Design System

### Destination Card (Glassmorphism)
```css
.card-glass {
  /* Glass Effect */
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  
  /* Border & Shadow */
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  
  /* Transitions */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
}

.card-glass:hover {
  /* Enhanced Glass Effect */
  background: rgba(255, 255, 255, 0.8);
  
  /* Enhanced Shadow */
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  
  /* Lift Effect */
  transform: translateY(-8px);
}
```

### Standard Card
```css
.card-standard {
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
}

.card-standard:hover {
  border-color: #D1D5DB;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
}
```

## 🎨 Usage Guidelines

### Color Combinations
```css
/* High Contrast Text on Gradient */
.text-on-gradient {
  color: #FFFFFF;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* Readable Text on Glass */
.text-on-glass {
  color: #1A1A1A;
  font-weight: 600;
}

/* Muted Text */
.text-muted {
  color: #6B7280;
}
```

### Gradient Utilities
```css
/* Primary Gradient Background */
.bg-gradient-primary {
  background: linear-gradient(135deg, #08CFCC 0%, #B445EA 100%);
}

/* Primary Gradient Text */
.text-gradient-primary {
  background: linear-gradient(135deg, #08CFCC 0%, #B445EA 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Subtle Gradient Background */
.bg-gradient-subtle {
  background: linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%);
}
```

## 📱 Responsive Considerations

### Mobile Button Adjustments
```css
@media (max-width: 768px) {
  .btn-primary,
  .btn-secondary {
    padding: 14px 20px;
    font-size: 1rem;
    min-height: 48px; /* Touch-friendly */
  }
  
  .btn-glass {
    padding: 10px 16px;
    font-size: 0.875rem;
  }
}
```

### Touch Device Optimizations
```css
@media (hover: none) and (pointer: coarse) {
  .btn-primary:hover,
  .btn-secondary:hover,
  .btn-glass:hover {
    transform: none; /* Disable hover transforms on touch */
  }
  
  .btn-primary:active,
  .btn-secondary:active,
  .btn-glass:active {
    transform: scale(0.98); /* Provide tactile feedback */
  }
}
```

## ♿ Accessibility Features

### Focus States
```css
.btn-primary:focus-visible,
.btn-secondary:focus-visible,
.btn-glass:focus-visible {
  outline: 2px solid #08CFCC;
  outline-offset: 2px;
  box-shadow: 
    0 0 0 4px rgba(8, 207, 204, 0.2),
    var(--original-shadow);
}
```

### High Contrast Mode
```css
@media (prefers-contrast: high) {
  .btn-primary {
    background: #000000;
    border: 2px solid #FFFFFF;
  }
  
  .btn-secondary {
    border-width: 3px;
    border-color: #000000;
  }
  
  .card-glass {
    background: #FFFFFF;
    border: 2px solid #000000;
    backdrop-filter: none;
  }
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  .btn-primary,
  .btn-secondary,
  .btn-glass,
  .card-glass,
  .card-standard {
    transition: none;
    transform: none !important;
  }
  
  .btn-glass::before {
    display: none;
  }
}
```

---

*This design system ensures consistency, accessibility, and premium visual quality across the entire MagicWorld Travel Agency website.*