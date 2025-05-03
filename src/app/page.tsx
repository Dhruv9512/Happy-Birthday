
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Heart, Gift, Sparkles } from 'lucide-react'; // Added Sparkles icon
import { cn } from '@/lib/utils';


export default function BirthdayPage() {

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground p-4 md:p-8">
      <header className="text-center mb-12 fade-in">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground bg-primary/80 py-3 px-6 rounded-lg inline-block shadow-md mb-2">
          Happy Birthday, My Love!
        </h1>
        <p className="text-lg text-muted-foreground italic">Celebrating You Today</p>
      </header>

      <main className="flex-grow flex flex-col items-center gap-16">

        {/* My Thoughts On You Section - REVISED AGAIN */}
        <section className="w-full max-w-5xl fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-heading font-semibold text-center mb-8 flex items-center justify-center gap-3 text-primary-foreground">
            <Sparkles className="text-accent w-7 h-7" /> {/* Replaced Heart with Sparkles */}
            A Few Reasons I Admire You...
            <Sparkles className="text-accent w-7 h-7" /> {/* Replaced Heart with Sparkles */}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Intelligence/Insight */}
            <Card className="overflow-hidden shadow-lg border-accent/50 border-dashed border bg-card/50 hover:shadow-xl transition-shadow duration-300 flex flex-col group">
              <div className="relative w-full aspect-video rounded-t-lg overflow-hidden">
                  <Image
                    data-ai-hint="Thoughtful woman looking out window soft light"
                    src="https://picsum.photos/400/225?random=21"
                    alt="Insightful"
                    fill
                    sizes="(max-width: 768px) 80vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                   <CardTitle className="absolute bottom-2 left-4 text-2xl font-semibold text-white drop-shadow-md font-heading">Your Mind</CardTitle>
              </div>
              <CardContent className="p-4 flex-grow">
                <CardDescription className="text-muted-foreground text-sm mt-2">
                   Your unique perspective and brilliant insights always amaze me. You see the beauty and complexity in everything.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 2: Joy/Laughter */}
             <Card className="overflow-hidden shadow-lg border-accent/50 border-dashed border bg-card/50 hover:shadow-xl transition-shadow duration-300 flex flex-col group">
              <div className="relative w-full aspect-video rounded-t-lg overflow-hidden">
                  <Image
                    data-ai-hint="Woman laughing joyfully outdoors sunny day"
                    src="https://picsum.photos/400/225?random=22"
                    alt="Joyful"
                    fill
                    sizes="(max-width: 768px) 80vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                   <CardTitle className="absolute bottom-2 left-4 text-2xl font-semibold text-white drop-shadow-md font-heading">Your Spirit</CardTitle>
              </div>
              <CardContent className="p-4 flex-grow">
                <CardDescription className="text-muted-foreground text-sm mt-2">
                   Your infectious laughter and ability to find joy in the simplest moments brighten every day.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 3: Kindness/Compassion */}
            <Card className="overflow-hidden shadow-lg border-accent/50 border-dashed border bg-card/50 hover:shadow-xl transition-shadow duration-300 flex flex-col group">
              <div className="relative w-full aspect-video rounded-t-lg overflow-hidden">
                  <Image
                    data-ai-hint="Hands gently holding small flower kindness compassion"
                    src="https://picsum.photos/400/225?random=23"
                    alt="Kindness"
                    fill
                    sizes="(max-width: 768px) 80vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                   <CardTitle className="absolute bottom-2 left-4 text-2xl font-semibold text-white drop-shadow-md font-heading">Your Heart</CardTitle>
              </div>
              <CardContent className="p-4 flex-grow">
                <CardDescription className="text-muted-foreground text-sm mt-2">
                  Your incredible kindness and empathy touch everyone around you. You have a truly compassionate soul.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
             <Heart className="w-10 h-10 text-accent fill-current inline-block animate-pulse" /> {/* Smaller heart */}
          </div>
           <p className="text-center text-sm text-muted-foreground mt-1 italic">...and so much more.</p> {/* Adjusted text */}
        </section>

        <Separator className="my-8 bg-accent/50 w-3/4 mx-auto" />

        {/* Birthday Message Frame Section */}
        <section className="w-full max-w-3xl fade-in" style={{ animationDelay: '0.4s' }}>
          <Card className="bg-card border-accent shadow-xl overflow-hidden border-2 border-dashed p-1">
             <div className="border border-primary rounded-lg p-4 md:p-6">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-heading font-semibold text-primary-foreground flex items-center justify-center gap-2">
                    <Gift className="text-accent w-6 h-6" />
                    A Special Message For You
                    <Gift className="text-accent w-6 h-6" />
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-2">From my heart to yours</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mt-6">
                  <div className="w-full md:w-1/2 flex-shrink-0 rounded-lg overflow-hidden shadow-md border-4 border-primary/50">
                    <Image
                      data-ai-hint="romantic couple portrait soft light vintage feel"
                      src="https://picsum.photos/400/400?random=100"
                      alt="Special birthday photo"
                      width={400}
                      height={400}
                      className="object-cover w-full h-auto md:h-full aspect-square"
                      sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 400px"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <p className="text-lg leading-relaxed text-foreground">
                      My dearest, on your special day, I want to remind you how much you mean to me.
                      Every moment with you is a treasure, and my admiration for you grows stronger each day.
                      You bring so much joy and light into my life.
                      Wishing you a birthday filled with happiness, laughter, and everything your heart desires.
                    </p>
                    <p className="text-right mt-4 text-accent font-semibold italic">
                      Forever and always, <br />
                      [Your Name] {/* Replace with sender's name */}
                    </p>
                  </div>
                </CardContent>
             </div>
          </Card>
        </section>
      </main>

      <footer className="text-center mt-16 py-4 text-muted-foreground text-sm fade-in" style={{ animationDelay: '0.6s' }}>
        <p>Made with Love <Heart className="inline w-4 h-4 text-accent fill-current" /></p>
      </footer>
    </div>
  );
}
