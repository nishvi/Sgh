import React, { useState, useCallback } from 'react';
import { MagicWandIcon } from '../constants';
import { generateBrandDescription } from '../services/geminiService';

const EditorInput: React.FC<{ label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; type?: string; placeholder?: string, isTextarea?: boolean }> = ({ label, isTextarea, ...props }) => (
    <div>
        <label className="block text-sm font-medium text-brand-dark/90 mb-1">{label}</label>
        {isTextarea ? (
            <textarea {...props} rows={4} className="w-full px-4 py-2 rounded-lg border-2 border-brand-light-green/50 focus:ring-2 focus:ring-brand-accent focus:outline-none transition-shadow bg-white/70" />
        ) : (
            <input {...props} className="w-full px-4 py-2 rounded-lg border-2 border-brand-light-green/50 focus:ring-2 focus:ring-brand-accent focus:outline-none transition-shadow bg-white/70" />
        )}
    </div>
);

const SellerShowcase: React.FC = () => {
    const [brandName, setBrandName] = useState('Verdant Grove');
    const [headline, setHeadline] = useState('Pure, Potent, Plant-Powered Wellness.');
    const [description, setDescription] = useState('At Verdant Grove, we believe that nature holds the key to wellness. We handcraft our organic products in small batches, ensuring every item is as pure and potent as the earth it came from.');
    const [brandColor, setBrandColor] = useState('#3A5A40');
    const [imageUrl, setImageUrl] = useState('https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop');
    const [customDomain, setCustomDomain] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [error, setError] = useState('');

    const handleGenerateDescription = useCallback(async () => {
        if (!brandName.trim()) {
            setError('Please enter a brand name first.');
            return;
        }
        setIsGenerating(true);
        setError('');
        try {
            const newDescription = await generateBrandDescription(brandName);
            setDescription(newDescription);
        } catch (e: any) {
            setError(e.message || "Failed to generate description.");
        } finally {
            setIsGenerating(false);
        }
    }, [brandName]);

    return (
        <section className="py-20 md:py-28 bg-brand-light-green/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-green">Create Your Seller Storefront</h2>
                    <p className="text-lg text-brand-dark mt-4 max-w-3xl mx-auto">
                        Design a beautiful landing page with our live WYSIWYG editor, generate copy with AI, and connect your own domain. No code required.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    {/* Editor Panel */}
                    <div className="bg-white/60 p-8 rounded-2xl shadow-lg space-y-6 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-brand-dark">Live Editor</h3>
                        <EditorInput label="Brand Name" value={brandName} onChange={e => setBrandName(e.target.value)} placeholder="e.g., 'Verdant Grove'" />
                        <EditorInput label="Headline" value={headline} onChange={e => setHeadline(e.target.value)} placeholder="e.g., 'Pure, Potent, Plant-Powered'" />
                        <div>
                             <EditorInput label="Brand Description" value={description} onChange={e => setDescription(e.target.value)} isTextarea={true} />
                             <button onClick={handleGenerateDescription} disabled={isGenerating} className="mt-2 flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-green disabled:text-gray-400 transition-colors">
                                 <MagicWandIcon className="w-5 h-5" />
                                 {isGenerating ? 'Generating...' : 'Generate with AI'}
                             </button>
                             {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
                        </div>
                        <div className="flex items-center gap-4">
                            <EditorInput label="Brand Color" value={brandColor} onChange={e => setBrandColor(e.target.value)} type="color" />
                            <div className="flex-grow">
                                <EditorInput label="Banner Image URL" value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="https://example.com/image.jpg" />
                            </div>
                        </div>

                         <div className="pt-6 border-t border-brand-light-green">
                            <h3 className="text-2xl font-bold text-brand-dark mb-4">Connect Your Domain</h3>
                            <EditorInput label="Custom Domain Name" value={customDomain} onChange={e => setCustomDomain(e.target.value)} placeholder="www.myorganicbrand.com" />
                            {customDomain && (
                                <div className="mt-4 bg-brand-cream p-4 rounded-lg text-sm text-brand-dark/80 space-y-2">
                                    <p className="font-semibold">Setup Instructions:</p>
                                    <ol className="list-decimal list-inside space-y-1">
                                        <li>Go to your domain provider's DNS settings.</li>
                                        <li>Create a <code className="bg-brand-dark/10 px-1 rounded">CNAME</code> record for '{customDomain}'.</li>
                                        <li>Point it to: <strong>sellers.sattvagreenhub.com</strong></li>
                                    </ol>
                                </div>
                            )}
                        </div>

                    </div>

                    {/* Preview Panel */}
                    <div className="sticky top-28">
                        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-gray-200">
                             <div className="h-8 bg-gray-200 flex items-center px-4 space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="bg-gray-50 min-h-[60vh] transition-all duration-500">
                                {/* Header */}
                                <header 
                                    className="h-48 bg-cover bg-center text-white flex flex-col justify-center items-center p-6 text-center"
                                    style={{ backgroundColor: brandColor, backgroundImage: `url('${imageUrl}')`, backgroundBlendMode: 'multiply' }}
                                >
                                    <h1 className="text-4xl font-bold tracking-tight text-shadow-md">{brandName || 'Your Brand Name'}</h1>
                                </header>
                                {/* Content */}
                                <main className="p-8">
                                    <h2 className="text-3xl font-semibold mb-4" style={{ color: brandColor }}>{headline || 'Your Catchy Headline'}</h2>
                                    <p className="text-gray-700 leading-relaxed">{description || 'Your compelling brand description will appear here. Tell your customers what makes your products special.'}</p>
                                    <button className="mt-8 px-6 py-3 rounded-full text-white font-bold transition-transform transform hover:scale-105" style={{ backgroundColor: brandColor }}>Shop Now</button>
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`.text-shadow-md { text-shadow: 1px 1px 3px rgba(0,0,0,0.5); }`}</style>
        </section>
    );
}

export default SellerShowcase;