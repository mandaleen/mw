'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  ArrowRight, 
  Download, 
  Heart, 
  Share, 
  Star,
  Loader2,
  Check
} from 'lucide-react';

export default function ButtonShowcase() {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});
  const [likedStates, setLikedStates] = useState<Record<string, boolean>>({});

  const handleLoading = (buttonId: string) => {
    setLoadingStates(prev => ({ ...prev, [buttonId]: true }));
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [buttonId]: false }));
    }, 2000);
  };

  const toggleLike = (buttonId: string) => {
    setLikedStates(prev => ({ ...prev, [buttonId]: !prev[buttonId] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              MagicWorld{' '}
              <span className="text-transparent bg-gradient-to-r from-[#08CFCC] to-[#B445EA] bg-clip-text">
                Design System
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete showcase of buttons, colors, and interactive elements used throughout the MagicWorld Travel Agency website.
            </p>
          </div>

          {/* Color Palette */}
          <Card className="mb-12 bg-white/70 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Color Palette</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Primary Colors */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Primary Gradient</h3>
                  <div className="space-y-2">
                    <div className="h-16 bg-gradient-to-r from-[#08CFCC] to-[#B445EA] rounded-lg shadow-lg"></div>
                    <div className="text-sm space-y-1">
                      <p><code className="bg-gray-100 px-2 py-1 rounded text-xs">#08CFCC</code> Aqua</p>
                      <p><code className="bg-gray-100 px-2 py-1 rounded text-xs">#B445EA</code> Violet</p>
                    </div>
                  </div>
                </div>

                {/* Hover States */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Hover States</h3>
                  <div className="space-y-2">
                    <div className="h-16 bg-gradient-to-r from-[#07B8B5] to-[#A33DD1] rounded-lg shadow-lg"></div>
                    <div className="text-sm space-y-1">
                      <p><code className="bg-gray-100 px-2 py-1 rounded text-xs">#07B8B5</code> Dark Aqua</p>
                      <p><code className="bg-gray-100 px-2 py-1 rounded text-xs">#A33DD1</code> Dark Violet</p>
                    </div>
                  </div>
                </div>

                {/* Neutral Colors */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Neutral Tones</h3>
                  <div className="space-y-2">
                    <div className="h-4 bg-white border rounded shadow-sm"></div>
                    <div className="h-4 bg-gray-50 rounded"></div>
                    <div className="h-4 bg-gray-100 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                  </div>
                </div>

                {/* Text Colors */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Text Colors</h3>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-900 rounded"></div>
                    <div className="h-4 bg-gray-600 rounded"></div>
                    <div className="h-4 bg-gray-400 rounded"></div>
                    <div className="h-4 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Primary Buttons */}
          <Card className="mb-12 bg-white/70 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Primary Buttons</CardTitle>
              <p className="text-gray-600">Gradient CTA buttons with hover effects and micro-interactions</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Large Primary */}
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Large Primary</h4>
                  <Button 
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#08CFCC] to-[#B445EA] hover:from-[#07B8B5] hover:to-[#A33DD1] text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                    onClick={() => handleLoading('large-primary')}
                    disabled={loadingStates['large-primary']}
                  >
                    {loadingStates['large-primary'] ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Loading...
                      </>
                    ) : (
                      <>
                        <ArrowRight className="w-5 h-5 mr-2" />
                        Start Your Journey
                      </>
                    )}
                  </Button>
                </div>

                {/* Medium Primary */}
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Medium Primary</h4>
                  <Button 
                    className="w-full bg-gradient-to-r from-[#08CFCC] to-[#B445EA] hover:from-[#07B8B5] hover:to-[#A33DD1] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Demo
                  </Button>
                </div>

                {/* Small Primary */}
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Small Primary</h4>
                  <Button 
                    size="sm"
                    className="w-full bg-gradient-to-r from-[#08CFCC] to-[#B445EA] hover:from-[#07B8B5] hover:to-[#A33DD1] text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Download className="w-3 h-3 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Secondary Buttons */}
          <Card className="mb-12 bg-white/70 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Secondary Buttons</CardTitle>
              <p className="text-gray-600">Outline buttons with subtle hover effects</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Large Secondary</h4>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full border-2 border-gray-300 hover:border-gray-400 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    Learn More
                  </Button>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Medium Secondary</h4>
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-gray-300 hover:border-gray-400 font-medium rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    View Details
                  </Button>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Small Secondary</h4>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border border-gray-300 hover:border-gray-400 font-medium rounded-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Glass Effect Buttons */}
          <Card className="mb-12 bg-white/70 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Glass Effect Buttons</CardTitle>
              <p className="text-gray-600">Premium glass morphism buttons with reflection effects</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Glass Primary</h4>
                  <button className="glass-button w-full bg-gradient-to-r from-[#08CFCC] to-[#B445EA] hover:from-[#07B8B5] hover:to-[#A33DD1] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 relative overflow-hidden">
                    Contact Us
                  </button>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Glass Secondary</h4>
                  <button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-gray-900 font-medium py-3 px-6 rounded-lg hover:bg-white/30 hover:shadow-lg transition-all duration-300">
                    Get Quote
                  </button>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Glass Outline</h4>
                  <button className="w-full bg-transparent backdrop-blur-sm border-2 border-gray-300/50 text-gray-700 font-medium py-3 px-6 rounded-lg hover:border-gray-400/70 hover:bg-white/10 transition-all duration-300">
                    Browse
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Icon Buttons */}
          <Card className="mb-12 bg-white/70 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Icon Buttons</CardTitle>
              <p className="text-gray-600">Interactive icon buttons with hover transformations</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div className="space-y-2">
                  <button 
                    className="w-12 h-12 bg-gray-100 hover:bg-gradient-to-r hover:from-[#08CFCC] hover:to-[#B445EA] text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    onClick={() => toggleLike('heart')}
                  >
                    <Heart className={`w-5 h-5 ${likedStates['heart'] ? 'fill-current text-red-500' : ''}`} />
                  </button>
                  <p className="text-xs text-center text-gray-600">Like</p>
                </div>

                <div className="space-y-2">
                  <button className="w-12 h-12 bg-gray-100 hover:bg-gradient-to-r hover:from-[#08CFCC] hover:to-[#B445EA] text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                    <Share className="w-5 h-5" />
                  </button>
                  <p className="text-xs text-center text-gray-600">Share</p>
                </div>

                <div className="space-y-2">
                  <button className="w-12 h-12 bg-gray-100 hover:bg-gradient-to-r hover:from-[#08CFCC] hover:to-[#B445EA] text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                    <Star className="w-5 h-5" />
                  </button>
                  <p className="text-xs text-center text-gray-600">Favorite</p>
                </div>

                <div className="space-y-2">
                  <button className="w-12 h-12 bg-gray-100 hover:bg-gradient-to-r hover:from-[#08CFCC] hover:to-[#B445EA] text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                    <Download className="w-5 h-5" />
                  </button>
                  <p className="text-xs text-center text-gray-600">Download</p>
                </div>

                <div className="space-y-2">
                  <button className="w-12 h-12 bg-gray-100 hover:bg-gradient-to-r hover:from-[#08CFCC] hover:to-[#B445EA] text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                    <Play className="w-5 h-5" />
                  </button>
                  <p className="text-xs text-center text-gray-600">Play</p>
                </div>

                <div className="space-y-2">
                  <button className="w-12 h-12 bg-gray-100 hover:bg-gradient-to-r hover:from-[#08CFCC] hover:to-[#B445EA] text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                    <Check className="w-5 h-5" />
                  </button>
                  <p className="text-xs text-center text-gray-600">Confirm</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Badge Showcase */}
          <Card className="mb-12 bg-white/70 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Badges & Tags</CardTitle>
              <p className="text-gray-600">Various badge styles for categories and status indicators</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Primary Badges</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-[#08CFCC] to-[#B445EA] text-white border-0">Featured</Badge>
                    <Badge className="bg-gradient-to-r from-[#08CFCC] to-[#B445EA] text-white border-0">Popular</Badge>
                    <Badge className="bg-gradient-to-r from-[#08CFCC] to-[#B445EA] text-white border-0">Recommended</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Secondary Badges</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Europe</Badge>
                    <Badge variant="secondary">Asia</Badge>
                    <Badge variant="secondary">Americas</Badge>
                    <Badge variant="secondary">Africa</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Outline Badges</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="hover:border-gray-400 cursor-pointer transition-colors">All</Badge>
                    <Badge variant="outline" className="hover:border-gray-400 cursor-pointer transition-colors">Beach</Badge>
                    <Badge variant="outline" className="hover:border-gray-400 cursor-pointer transition-colors">Mountain</Badge>
                    <Badge variant="outline" className="hover:border-gray-400 cursor-pointer transition-colors">City</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interactive States */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Interactive States</CardTitle>
              <p className="text-gray-600">Button states including loading, disabled, and success</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Loading State</h4>
                  <Button 
                    className="w-full bg-gradient-to-r from-[#08CFCC] to-[#B445EA] text-white"
                    disabled
                  >
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Processing...
                  </Button>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Disabled State</h4>
                  <Button 
                    className="w-full bg-gradient-to-r from-[#08CFCC] to-[#B445EA] text-white"
                    disabled
                  >
                    Unavailable
                  </Button>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Success State</h4>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    <Check className="w-4 h-4 mr-2" />
                    Completed
                  </Button>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Error State</h4>
                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                    Try Again
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}