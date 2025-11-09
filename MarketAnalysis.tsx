
import React, { useState, useCallback } from 'react';
import { fetchMarketAnalysis } from '../services/geminiService';
import { MarketAnalysisResult } from '../types';

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center space-x-2">
    <div className="w-4 h-4 rounded-full bg-brand-accent animate-bounce [animation-delay:-0.3s]"></div>
    <div className="w-4 h-4 rounded-full bg-brand-accent animate-bounce [animation-delay:-0.15s]"></div>
    <div className="w-4 h-4 rounded-full bg-brand-accent animate-bounce"></div>
  </div>
);

const AnalysisSection: React.FC<{ title: string; content: string }> = ({ title, content }) => (
  <div>
    <h4 className="text-lg font-semibold text-brand-green mb-2">{title}</h4>
    <p className="text-brand-dark/90 whitespace-pre-wrap">{content}</p>
  </div>
);

const MarketAnalysis: React.FC = () => {
  const [productIdea, setProductIdea] = useState<string>('');
  const [analysis, setAnalysis] = useState<MarketAnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = useCallback(async () => {
    if (!productIdea.trim()) {
      setError('Please enter a product idea.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setAnalysis(null);

    try {
      const result = await fetchMarketAnalysis(productIdea);
      setAnalysis(result);
    } catch (e: any) {
      setError(e.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [productIdea]);

  return (
    <section className="py-20 md:py-28 bg-brand-light-green/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-green">AI-Powered Business Insights</h2>
          <p className="text-lg text-brand-dark mt-4 max-w-2xl mx-auto">
            Have an organic product idea? Get instant market analysis powered by Gemini.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="text"
              value={productIdea}
              onChange={(e) => setProductIdea(e.target.value)}
              placeholder="e.g., 'Artisanal Moringa Leaf Tea'"
              className="w-full px-5 py-3 rounded-full border-2 border-brand-light-green focus:ring-2 focus:ring-brand-accent focus:outline-none transition-shadow"
              disabled={isLoading}
            />
            <button
              onClick={handleAnalyze}
              disabled={isLoading}
              className="bg-brand-accent text-white px-8 py-3 rounded-full font-bold hover:bg-brand-green transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex-shrink-0"
            >
              {isLoading ? 'Analyzing...' : 'Analyze Market'}
            </button>
          </div>
          
          {error && <p className="text-red-600 text-center">{error}</p>}

          <div className="mt-8 min-h-[20rem]">
            {isLoading && <LoadingSpinner />}
            {analysis && (
              <div className="bg-white p-8 rounded-2xl shadow-lg animate-fade-in space-y-6">
                <h3 className="text-2xl font-bold text-brand-dark border-b pb-3 mb-4">Market Analysis for "{productIdea}"</h3>
                <AnalysisSection title="🎯 Target Audience" content={analysis.targetAudience} />
                <AnalysisSection title="⚔️ Potential Competition" content={analysis.potentialCompetition} />
                <AnalysisSection title="💡 Marketing Suggestions" content={analysis.marketingSuggestions} />
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default MarketAnalysis;
