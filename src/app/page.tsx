
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Heart, Gift, Sparkles } from 'lucide-react'; // Added Sparkles icon
import { cn } from '@/lib/utils';


export default function BirthdayPage() {

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground p-4 md:p-8">
      <header className="text-center mb-12 fade-in">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground bg-primary/80 py-4 px-8 rounded-xl shadow-lg mb-3 inline-block tracking-wide">
          Happy Birthday, My Love!
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground italic">Celebrating You Today</p>
      </header>

      <main className="flex-grow flex flex-col items-center gap-12 md:gap-16">

        {/* My Thoughts On You Section - Enhanced Styling & Responsiveness */}
        <section className="w-full max-w-6xl fade-in px-4" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-center mb-10 flex items-center justify-center gap-3 text-primary-foreground">
            <Sparkles className="text-accent w-7 h-7 md:w-8 md:h-8" />
            Why You Shine So Bright...
            <Sparkles className="text-accent w-7 h-7 md:w-8 md:h-8" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* Card 1: Intelligence/Insight */}
            <Card className="overflow-hidden shadow-lg border-accent/40 border-2 bg-card/60 hover:shadow-2xl transition-all duration-300 flex flex-col group rounded-xl backdrop-blur-sm">
              <div className="relative w-full aspect-square rounded-t-lg overflow-hidden">
                  <Image
                    data-ai-hint="Thoughtful woman serene contemplative library"
                    src="https://picsum.photos/400/400?random=31" // Square image
                    alt="Insightful Mind"
                    fill
                    sizes="(max-width: 768px) 90vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                   <CardTitle className="absolute bottom-3 left-4 text-2xl md:text-3xl font-semibold text-white drop-shadow-lg font-heading">Your Mind</CardTitle>
              </div>
              <CardContent className="p-5 flex-grow">
                <CardDescription className="text-muted-foreground text-base mt-2 leading-relaxed">
                   Your unique perspective and brilliant insights always captivate me. You find beauty and depth where others don't look.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 2: Joy/Laughter */}
             <Card className="overflow-hidden shadow-lg border-accent/40 border-2 bg-card/60 hover:shadow-2xl transition-all duration-300 flex flex-col group rounded-xl backdrop-blur-sm">
              <div className="relative w-full aspect-square rounded-t-lg overflow-hidden">
                  <Image
                    data-ai-hint="Woman laughing joyfully vibrant flowers sunlight"
                    src="https://picsum.photos/400/400?random=32" // Square image
                    alt="Joyful Spirit"
                    fill
                    sizes="(max-width: 768px) 90vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                   <CardTitle className="absolute bottom-3 left-4 text-2xl md:text-3xl font-semibold text-white drop-shadow-lg font-heading">Your Spirit</CardTitle>
              </div>
              <CardContent className="p-5 flex-grow">
                <CardDescription className="text-muted-foreground text-base mt-2 leading-relaxed">
                   Your infectious laughter and radiant joy light up every room. You make the ordinary feel extraordinary.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 3: Kindness/Compassion */}
            <Card className="overflow-hidden shadow-lg border-accent/40 border-2 bg-card/60 hover:shadow-2xl transition-all duration-300 flex flex-col group rounded-xl backdrop-blur-sm">
              <div className="relative w-full aspect-square rounded-t-lg overflow-hidden">
                  <Image
                    data-ai-hint="Hands gently holding butterfly soft focus nature"
                    src="https://picsum.photos/400/400?random=33" // Square image
                    alt="Kind Heart"
                    fill
                    sizes="(max-width: 768px) 90vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                   <CardTitle className="absolute bottom-3 left-4 text-2xl md:text-3xl font-semibold text-white drop-shadow-lg font-heading">Your Heart</CardTitle>
              </div>
              <CardContent className="p-5 flex-grow">
                <CardDescription className="text-muted-foreground text-base mt-2 leading-relaxed">
                  Your incredible kindness and empathy create warmth wherever you go. You have a truly compassionate and beautiful soul.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-10">
             <Heart className="w-10 h-10 text-accent fill-accent/80 inline-block animate-pulse" />
          </div>
           <p className="text-center text-base text-muted-foreground mt-2 italic">...and countless other reasons.</p>
        </section>

        <Separator className="my-8 bg-accent/30 w-3/4 md:w-1/2 mx-auto rounded-full h-1" />

        {/* Birthday Message Frame Section */}
        <section className="w-full max-w-4xl fade-in px-4" style={{ animationDelay: '0.4s' }}>
           {/* Added padding-bottom for spacing */}
          <Card className="bg-card/80 border-primary shadow-xl overflow-hidden border-2 border-dashed p-1 rounded-xl backdrop-blur-sm">
             <div className="border border-accent/50 rounded-lg p-6 md:p-8">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-3xl md:text-4xl font-heading font-semibold text-primary-foreground flex items-center justify-center gap-2">
                    <Gift className="text-accent w-7 h-7 md:w-8 md:h-8" />
                    A Special Message For You
                    <Gift className="text-accent w-7 h-7 md:w-8 md:h-8" />
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-3 text-base">From my heart to yours</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 mt-6">
                   {/* Adjusted width distribution */}
                  <div className="w-full lg:w-5/12 flex-shrink-0 rounded-lg overflow-hidden shadow-md border-4 border-primary/30 aspect-square lg:aspect-auto">
                    <Image
                      data-ai-hint="romantic couple silhouette sunset beach"
                      src="https://picsum.photos/500/500?random=101" // Slightly larger image
                      alt="Special birthday photo"
                      width={500}
                      height={500}
                      className="object-cover w-full h-full"
                       sizes="(max-width: 1024px) 80vw, 40vw" // Updated sizes
                    />
                  </div>
                   {/* Adjusted width distribution */}
                  <div className="w-full lg:w-7/12">
                    <p className="text-lg md:text-xl leading-relaxed text-foreground">
                      My dearest, on your special day, I want to remind you how much you mean to me.
                      Every moment with you is a treasure, and my admiration for you grows stronger each day.
                      You bring so much joy and light into my life.
                      Wishing you a birthday filled with happiness, laughter, and everything your heart desires.
                    </p>
                    <p className="text-right mt-6 text-accent font-semibold italic text-lg">
                      Forever and always, <br />
                      [Your Name] {/* Replace with sender's name */}
                    </p>
                  </div>
                </CardContent>
             </div>
          </Card>
        </section>
      </main>

      <footer className="text-center mt-16 py-6 text-muted-foreground text-base fade-in" style={{ animationDelay: '0.6s' }}>
        <p>Made with Love <Heart className="inline w-5 h-5 text-accent fill-current" /></p>
      </footer>
    </div>
  );
}
