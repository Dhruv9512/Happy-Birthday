
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Heart, Gift, Sparkles, PartyPopper, Cake, Smile, Shield, Star, Clock, Mountain, Sun } from 'lucide-react'; // Added more icons
import { cn } from '@/lib/utils';


export default function BirthdayPage() {

  // Helper function to add staggered animation delay
  const getDelay = (index: number) => `${index * 0.15}s`;

  return (
    <div className="flex flex-col min-h-screen text-foreground p-4 md:p-8 overflow-x-hidden"> {/* Added overflow-x-hidden */}
      {/* Enhanced Header */}
      <header className="text-center mb-16 mt-8 fade-in relative overflow-hidden py-12 rounded-2xl shadow-inner bg-card border border-primary/30 backdrop-blur-sm">
         {/* Decorative elements - More subtle and spread out */}
        <Sparkles className="absolute top-2 left-2 text-accent w-6 h-6 opacity-50 animate-pulse-heart" style={{ animationDelay: '0.1s' }}/>
        <PartyPopper className="absolute top-5 right-5 text-accent w-7 h-7 opacity-60 rotate-[15deg]" />
        <Cake className="absolute bottom-2 right-2 text-accent w-6 h-6 opacity-50 rotate-[-10deg]" />
        <Heart className="absolute bottom-5 left-5 text-accent w-7 h-7 opacity-60 fill-accent/50 animate-pulse-heart" style={{ animationDelay: '0.4s' }}/>
        <Sparkles className="absolute top-1/2 left-1/4 text-accent w-5 h-5 opacity-40 animate-pulse-heart" style={{ animationDelay: '0.7s' }}/>
         <Sparkles className="absolute bottom-1/3 right-1/4 text-accent w-5 h-5 opacity-40 animate-pulse-heart" style={{ animationDelay: '1s' }}/>


        <h1 className={cn(
          "text-5xl md:text-7xl font-heading font-extrabold text-primary-foreground relative z-10",
          "bg-gradient-to-br from-primary/90 via-accent/90 to-primary/80 bg-clip-text text-transparent", // Refined Gradient
          "py-4 px-6 rounded-xl mb-4 inline-block tracking-wide", // Adjusted tracking
          "drop-shadow-xl" // Enhanced drop shadow
        )}>
          <Gift className="inline-block w-10 h-10 mr-4 text-accent drop-shadow-md transform -rotate-12" />
          Happy Birthday, Boku no subete!
          <Gift className="inline-block w-10 h-10 ml-4 text-accent drop-shadow-md transform rotate-12" />
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground italic font-medium relative z-10 max-w-xl mx-auto">
          Celebrating You Today and Always! Wishing you a day as bright and beautiful as you are.
        </p>
         {/* Subtle overlay moved behind text */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-background/5 to-transparent opacity-60 z-0"></div>
      </header>

      <main className="flex-grow flex flex-col items-center gap-16 md:gap-20"> {/* Increased gap */}

        {/* Why You Shine Section - More polish */}
        <section className="w-full max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-center mb-14 flex items-center justify-center gap-4 text-primary-foreground fade-in" style={{ animationDelay: '0.1s' }}>
            <Sparkles className="text-accent w-7 h-7 md:w-8 md:h-8 opacity-80" />
            A Few Reasons Why You Shine...
            <Sparkles className="text-accent w-7 h-7 md:w-8 md:h-8 opacity-80" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* Card 1: Your Smile */}
            <Card className="group overflow-hidden shadow-lg border-accent/30 border bg-card hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col rounded-xl backdrop-blur-sm fade-in transform hover:-translate-y-2" style={{ animationDelay: getDelay(1) }}>
               <CardHeader className="pt-6 pb-2 flex flex-row items-center justify-center space-x-3">
                  <Smile className="w-7 h-7 text-accent" />
                  <CardTitle className="text-2xl font-semibold font-heading text-primary-foreground">Your Smile</CardTitle>
               </CardHeader>
              <div className="relative w-full aspect-video overflow-hidden"> {/* Changed aspect ratio */}
                <Image
                  data-ai-hint="Woman smiling warmly sunlit garden soft focus"
                  src="https://mphkxojdifbgafp1.public.blob.vercel-storage.com/Mitsuha/WhatsApp%20Image%202025-05-09%20at%2010.59.43_494225fc-bm5rOdDBukCrFdXdezP8fuJaKc3Lpu.jpg" // Adjusted dimensions
                  alt="Your Beautiful Smile"
                  fill
                  sizes="(max-width: 768px) 90vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105" // Softer scale
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              </div>
              <CardContent className="p-5 flex-grow">
                <CardDescription className="text-muted-foreground text-base leading-relaxed text-center">
                  It lights up every room and warms every heart. Truly infectious and beautiful.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 2: Your Strength */}
             <Card className="group overflow-hidden shadow-lg border-accent/30 border bg-card hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col rounded-xl backdrop-blur-sm fade-in transform hover:-translate-y-2" style={{ animationDelay: getDelay(2) }}>
               <CardHeader className="pt-6 pb-2 flex flex-row items-center justify-center space-x-3">
                  <Shield className="w-7 h-7 text-accent" /> {/* Changed icon */}
                  <CardTitle className="text-2xl font-semibold font-heading text-primary-foreground">Your Strength</CardTitle>
               </CardHeader>
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  data-ai-hint="Woman standing confidently mountain peak sunrise silhouette"
                   src="https://picsum.photos/400/225?random=42" // Adjusted dimensions
                  alt="Your Inner Strength"
                  fill
                  sizes="(max-width: 768px) 90vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              </div>
              <CardContent className="p-5 flex-grow">
                <CardDescription className="text-muted-foreground text-base leading-relaxed text-center">
                  Your resilience and grace in facing challenges are truly admirable and inspiring.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 3: Your Passion */}
             <Card className="group overflow-hidden shadow-lg border-accent/30 border bg-card hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col rounded-xl backdrop-blur-sm fade-in transform hover:-translate-y-2" style={{ animationDelay: getDelay(3) }}>
               <CardHeader className="pt-6 pb-2 flex flex-row items-center justify-center space-x-3">
                  <Star className="w-7 h-7 text-accent" /> {/* Changed icon */}
                  <CardTitle className="text-2xl font-semibold font-heading text-primary-foreground">Your Spirit</CardTitle> {/* Changed title */}
               </CardHeader>
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                   data-ai-hint="Woman reading book cozy window seat sunlight streaming" // Changed hint
                   src="https://picsum.photos/400/225?random=43" // Adjusted dimensions
                  alt="Your Passionate Spirit"
                  fill
                  sizes="(max-width: 768px) 90vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              </div>
              <CardContent className="p-5 flex-grow">
                 <CardDescription className="text-muted-foreground text-base leading-relaxed text-center">
                   Your enthusiasm for life and the things you love is captivating and bright.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
           <div className="text-center mt-12">
             <Heart className="w-10 h-10 text-accent fill-accent/70 inline-block animate-pulse-heart" />
          </div>
           <p className="text-center text-base text-muted-foreground mt-2 italic fade-in" style={{ animationDelay: getDelay(4) }}>...and countless more qualities I adore.</p>
        </section>

        <Separator className="my-8 bg-accent/20 w-3/4 md:w-1/2 mx-auto rounded-full h-1 fade-in" style={{ animationDelay: getDelay(5) }}/>

         {/* Cherished Moments Section - Gallery Style */}
        <section className="w-full max-w-6xl px-4">
           <h2 className="text-3xl md:text-4xl font-heading font-semibold text-center mb-14 flex items-center justify-center gap-4 text-primary-foreground fade-in" style={{ animationDelay: getDelay(6) }}>
            <Clock className="text-accent w-7 h-7 md:w-8 md:h-8 opacity-80" />
            Moments We've Cherished
             <Clock className="text-accent w-7 h-7 md:w-8 md:h-8 opacity-80" />
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"> {/* Changed grid layout */}

            {[
              { src: "https://picsum.photos/300/400?random=51", alt: "Shared laughter", hint: "couple laughing coffee shop natural light", description: "Every laugh shared." },
              { src: "https://picsum.photos/300/400?random=52", alt: "Quiet adventures", hint: "couple hiking forest path serene peaceful", description: "Quiet adventures together." },
              { src: "https://picsum.photos/300/400?random=53", alt: "Sunny days", hint: "couple picnic blanket park sunny day", description: "Bright sunny days." },
              { src: "https://picsum.photos/300/400?random=54", alt: "Simple moments", hint: "hands holding close up warmth comfort", description: "The simple, perfect moments." },
            ].map((moment, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 fade-in" style={{ animationDelay: getDelay(7 + index) }}>
                 <Image
                  data-ai-hint={moment.hint}
                  src={moment.src}
                  alt={moment.alt}
                  width={300}
                  height={400}
                  sizes="(max-width: 768px) 45vw, 22vw"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay with text */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <p className="text-white text-sm md:text-base font-medium drop-shadow-md">{moment.description}</p>
                </div>
                 {/* Subtle border effect on hover */}
                 <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 rounded-xl transition-colors duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
           <p className="text-center text-base text-muted-foreground mt-10 italic fade-in" style={{ animationDelay: getDelay(11) }}>Looking forward to making many more...</p>
        </section>


        <Separator className="my-8 bg-accent/20 w-3/4 md:w-1/2 mx-auto rounded-full h-1 fade-in" style={{ animationDelay: getDelay(12) }}/>


        {/* Birthday Message Frame Section - Refined Look */}
        <section className="w-full max-w-4xl px-4 fade-in" style={{ animationDelay: getDelay(13) }}>
          <Card className="bg-card/90 border-primary shadow-xl overflow-hidden border-2 border-dashed p-1 rounded-2xl backdrop-blur-md"> {/* Increased blur and roundness */}
             <div className="border border-accent/40 rounded-xl p-6 md:p-10 bg-card/50"> {/* Inner border and padding */}
                <CardHeader className="text-center pb-6"> {/* Increased padding */}
                  <CardTitle className="text-3xl md:text-4xl font-heading font-semibold text-primary-foreground flex items-center justify-center gap-3">
                    <Gift className="text-accent w-8 h-8 md:w-9 md:h-9 transform -rotate-6" />
                    A Birthday Wish For You
                    <Gift className="text-accent w-8 h-8 md:w-9 md:h-9 transform rotate-6" />
                  </CardTitle>
                   <CardDescription className="text-muted-foreground mt-4 text-base md:text-lg"> {/* Larger description */}
                      From my heart to yours, with all my love.
                   </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 mt-6">
                  <div className="w-full lg:w-5/12 flex-shrink-0 rounded-lg overflow-hidden shadow-lg border-4 border-primary/20 aspect-square lg:aspect-[4/5]"> {/* Adjusted aspect ratio */}
                    <Image
                      data-ai-hint="romantic couple silhouette sunset beach soft light"
                      src="https://picsum.photos/400/500?random=101" // Adjusted dimensions
                      alt="A special moment"
                      width={400}
                      height={500}
                      className="object-cover w-full h-full"
                       sizes="(max-width: 1024px) 80vw, 35vw" // Adjusted sizes
                    />
                  </div>
                  <div className="w-full lg:w-7/12">
                    <p className="text-lg md:text-xl leading-relaxed text-foreground text-center lg:text-left">
                      My dearest, on your special day, more than ever, I celebrate the incredible person you are.
                      Every moment with you is a treasure, and my admiration for your spirit grows endlessly.
                      You fill my world with unparalleled joy and light.
                      <br/><br/>
                       <strong className='text-primary-foreground font-semibold'> Wishing you a birthday overflowing with happiness, laughter, and all the beautiful things you deserve.</strong> May this year bring you closer to your dreams and fill your days with love.
                    </p>
                    <p className="text-right mt-8 text-accent font-semibold italic text-lg">
                      With all my love, <br />
                       <span className="font-heading text-2xl">[Your Name]</span> {/* Replace with sender's name, styled */}
                    </p>
                  </div>
                </CardContent>
             </div>
          </Card>
        </section>
      </main>

       <footer className="text-center mt-20 py-8 text-muted-foreground text-base fade-in" style={{ animationDelay: getDelay(14) }}> {/* Increased top margin */}
         <p>Made with Love <Heart className="inline w-5 h-5 text-accent fill-current" /></p>
        <p className='mt-2 text-sm'>Happy Birthday! May your day be magical.</p> {/* Enhanced message */}
      </footer>
    </div>
  );
}
