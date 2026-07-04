// VALEN — Sample Product Data
// Replace amazonLink and platformLinks with real URLs before going live.

import { Product } from "./types";

export const products: Product[] = [
  // ─── TECH ────────────────────────────────────────────────────────────────
  {
    id: "1",
    slug: "sony-wh1000xm5",
    name: "Sony WH-1000XM5",
    brand: "Sony",
    category: "tech",
    price: "£349.00",
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
    ],
    shortReview:
      "The best noise-cancelling headphones I've ever tested. Sony have outdone themselves with the XM5.",
    fullReview: `I've tested a lot of headphones over the years, but the Sony WH-1000XM5 sits in a category of its own. From the moment you put them on, the noise cancellation is jaw-dropping — it doesn't just reduce background noise, it eliminates it entirely.

The build quality has been refined significantly over the XM4. The new hinge design feels more premium, the ear cups are softer, and the overall silhouette is sleeker and more modern. After 8+ hours of continuous wear, I experienced zero discomfort.

Audio quality is exceptional. The 30mm drivers deliver a wide soundstage with rich bass, detailed mids, and crisp highs that never feel fatiguing. Whether you're commuting, working, or just relaxing, the XM5 adapts to your environment intelligently.

Battery life hits an honest 30 hours with ANC enabled, and the quick charge feature giving you 3 hours of playback from just 3 minutes of charging is genuinely useful. This is a benchmark product.`,
    valenVerdict: "The definitive noise-cancelling headphone. No compromises.",
    pros: [
      "Industry-leading noise cancellation",
      "30-hour battery life",
      "Exceptional audio quality",
      "Premium build and comfort",
      "3-min quick charge = 3 hours playback",
    ],
    cons: [
      "Premium price point",
      "Cannot fold flat like XM4",
      "Touch controls take time to learn",
    ],
    whyIRecommend:
      "I use these every single day. Whether I'm on a packed train, working from a noisy café, or just wanting to get into a flow state — the XM5 delivers every time. If you're going to invest in one pair of headphones, make it these.",
    scores: {
      performance: 10,
      value: 8,
      quality: 10,
      easeOfUse: 9,
      overall: 9.8,
    },
    platforms: ["tiktok", "instagram", "youtube"],
    platformLinks: {
      tiktok: "https://tiktok.com",
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
    },
    amazonLink: "https://amazon.co.uk",
    trending: true,
    onSale: false,
    featured: true,
    latest: false,
    tags: ["headphones", "audio", "noise-cancelling", "wireless"],
    publishedAt: "2024-11-01",
  },
  {
    id: "2",
    slug: "apple-airpods-pro-2",
    name: "AirPods Pro (2nd Gen)",
    brand: "Apple",
    category: "tech",
    price: "£229.00",
    images: [
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=800&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
    ],
    shortReview:
      "Apple's best earbuds yet. The transparency mode feels like hearing superpowers.",
    fullReview: `The AirPods Pro 2nd generation represent a genuine leap forward. Apple has completely overhauled the driver system, the ANC algorithm, and added an H2 chip that makes everything feel effortlessly intelligent.

What sets these apart is the Adaptive Transparency mode. It's uncanny — you can hear the world around you naturally while still getting audio isolation when you need it. For city walkers and commuters, this is genuinely transformative.

The fit is excellent for most ear shapes, and the silicone tips create a proper seal. Touch controls are intuitive and the stem-squeeze mechanism feels premium. I've recommended these to more people than any other product in my tech rotation.

Battery life is solid at 6 hours from the buds alone, with 24 hours total from the case. The case now charges with Lightning (or MagSafe) which is a nice touch. These are the earbuds I reach for first, every day.`,
    valenVerdict: "The earbuds I recommend to everyone, every time.",
    pros: [
      "Best-in-class transparency mode",
      "Excellent ANC for in-ears",
      "Seamless Apple ecosystem integration",
      "Premium build quality",
      "Personalised Spatial Audio",
    ],
    cons: [
      "Expensive for in-ears",
      "Best with iPhone — limited Android support",
      "6-hour battery from buds alone",
    ],
    whyIRecommend:
      "I switched from over-ears for my daily commute specifically because of the transparency mode. It's that good. If you're in the Apple ecosystem, these are a must-buy.",
    scores: {
      performance: 10,
      value: 8,
      quality: 9,
      easeOfUse: 10,
      overall: 9.4,
    },
    platforms: ["tiktok", "instagram"],
    platformLinks: {
      tiktok: "https://tiktok.com",
      instagram: "https://instagram.com",
    },
    amazonLink: "https://amazon.co.uk",
    trending: true,
    onSale: true,
    salePrice: "£179.00",
    featured: true,
    latest: false,
    tags: ["earbuds", "apple", "wireless", "anc"],
    publishedAt: "2024-10-15",
  },

  // ─── KITCHEN ─────────────────────────────────────────────────────────────
  {
    id: "3",
    slug: "ninja-speedi-rapid-cooker",
    name: "Ninja Speedi Rapid Cooker",
    brand: "Ninja",
    category: "kitchen",
    price: "£179.99",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&q=80",
    ],
    shortReview:
      "Air fryer meets pressure cooker in one beautiful device. It's changed how I cook completely.",
    fullReview: `The Ninja Speedi is the kitchen gadget I wish I'd bought years ago. It combines a pressure cooker, air fryer, steamer, and six other cooking functions into one sleek unit that sits happily on any worktop.

The headline feature is the Speedi Meals function — a two-zone cooking system that lets you cook your protein and your sides simultaneously. Put chicken thighs in the pot, vegetables in the tray above, set the timer, and walk away. In 15 minutes you have a complete meal.

Build quality is excellent. The pot is non-stick and genuinely dishwasher safe, the lid mechanism is robust, and the control panel is clear and intuitive. I've used this almost every day for six months and it still looks and performs like new.

Cleanup is where Ninja really wins. Everything detaches, everything fits in the dishwasher, and there are no awkward crevices to scrub. This is a genuine time-saver for anyone who cooks regularly.`,
    valenVerdict: "The kitchen appliance that actually earns its worktop space.",
    pros: [
      "11 cooking functions in one device",
      "Speedi Meals two-zone cooking",
      "Incredibly fast cooking times",
      "Easy dishwasher-safe cleanup",
      "Great for batch cooking",
    ],
    cons: [
      "Large footprint on worktop",
      "Learning curve for pressure cooking",
      "Lid can be fiddly when hot",
    ],
    whyIRecommend:
      "I meal prep every Sunday and the Speedi has cut my cooking time in half. The quality of food it produces is genuinely impressive for a multi-cooker.",
    scores: {
      performance: 9,
      value: 9,
      quality: 9,
      easeOfUse: 8,
      overall: 9.0,
    },
    platforms: ["tiktok", "instagram", "pinterest"],
    platformLinks: {
      tiktok: "https://tiktok.com",
      pinterest: "https://pinterest.com",
    },
    amazonLink: "https://amazon.co.uk",
    trending: false,
    onSale: true,
    salePrice: "£139.99",
    featured: false,
    latest: true,
    tags: ["air fryer", "pressure cooker", "ninja", "kitchen"],
    publishedAt: "2024-12-01",
  },
  {
    id: "4",
    slug: "nespresso-vertuo-next",
    name: "Nespresso Vertuo Next",
    brand: "Nespresso",
    category: "kitchen",
    price: "£129.99",
    images: [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    ],
    shortReview:
      "Barista-quality coffee at home in 25 seconds. I haven't visited a coffee shop since buying this.",
    fullReview: `The Nespresso Vertuo Next is the machine I recommend to everyone who wants proper coffee at home without any complexity. It reads the barcode on every pod and automatically selects the perfect brewing parameters. You press one button. That's it.

The coffee quality is exceptional. The centrifusion technology creates a thick, genuine crema that rivals what you'd get at a good café. The espresso is rich and intense, the lungo is beautifully balanced, and the large coffee option produces something genuinely pleasant — not the watery nonsense you get from most machines.

Aesthetically it's beautiful. The matte finish, clean lines, and minimalist control panel make it the kind of appliance that actually elevates your kitchen rather than cluttering it. It connects to the Nespresso app for recipes and ordering, though you don't need the app to use it.

My only note is that pods have an ongoing cost, but Nespresso's subscription makes this manageable, and the quality justifies it.`,
    valenVerdict: "The best coffee machine under £150. Period.",
    pros: [
      "One-touch barista-quality coffee",
      "Stunning crema on every cup",
      "Minimal design",
      "Heats up in 30 seconds",
      "Five cup sizes supported",
    ],
    cons: [
      "Ongoing pod cost",
      "Pods not as eco-friendly as ground coffee",
      "Pod selection less varied than Nespresso Original",
    ],
    whyIRecommend:
      "My morning routine is built around this machine. It's the first thing I use every day and it's never let me down. Worth every penny.",
    scores: {
      performance: 9,
      value: 9,
      quality: 8,
      easeOfUse: 10,
      overall: 9.1,
    },
    platforms: ["instagram", "tiktok"],
    platformLinks: {
      instagram: "https://instagram.com",
      tiktok: "https://tiktok.com",
    },
    amazonLink: "https://amazon.co.uk",
    trending: false,
    onSale: false,
    featured: true,
    latest: false,
    tags: ["coffee", "nespresso", "kitchen", "morning"],
    publishedAt: "2024-09-20",
  },

  // ─── FITNESS ─────────────────────────────────────────────────────────────
  {
    id: "5",
    slug: "garmin-forerunner-265",
    name: "Garmin Forerunner 265",
    brand: "Garmin",
    category: "fitness",
    price: "£449.99",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&q=80",
    ],
    shortReview:
      "The running watch that made me take training seriously. GPS accuracy is unmatched.",
    fullReview: `The Garmin Forerunner 265 is the watch I'd recommend to any runner who wants to train smarter, not just harder. After six months of daily use, I can say with confidence that this is the best training companion I've ever worn.

The AMOLED display is gorgeous — sharp, bright, and always-on if you want it. Navigation is smooth, app layouts are sensible, and the watch face options are actually tasteful. It doesn't look like a fitness tracker; it looks like a premium watch.

Training intelligence is where Garmin genuinely outshines the competition. Daily Suggested Workouts adapt to your fitness level and recovery status. HRV Status, training load, and Body Battery give you a complete picture of how ready you are to train. I've avoided overtraining injuries specifically because of these metrics.

GPS lock is near-instant and remarkably accurate. Route mapping is detailed and reliable. Battery life easily covers multi-day adventures — I get 13 days in smartwatch mode, 20 hours GPS-on. This is a serious training tool for serious runners.`,
    valenVerdict: "The smartest running watch under £500.",
    pros: [
      "Accurate multi-band GPS",
      "Beautiful AMOLED display",
      "Daily Suggested Workouts AI",
      "13-day battery life",
      "Comprehensive health metrics",
    ],
    cons: [
      "Premium price",
      "Feature-heavy — steep learning curve",
      "App ecosystem less polished than Apple",
    ],
    whyIRecommend:
      "This watch changed how I train. The daily readiness scores mean I push hard when I can, rest when I need to, and the results show in my race times.",
    scores: {
      performance: 10,
      value: 8,
      quality: 10,
      easeOfUse: 8,
      overall: 9.2,
    },
    platforms: ["youtube", "instagram"],
    platformLinks: {
      youtube: "https://youtube.com",
      instagram: "https://instagram.com",
    },
    amazonLink: "https://amazon.co.uk",
    trending: true,
    onSale: false,
    featured: false,
    latest: true,
    tags: ["running", "watch", "GPS", "garmin", "fitness tracker"],
    publishedAt: "2024-11-15",
  },
  {
    id: "6",
    slug: "theragun-pro-plus",
    name: "Theragun Pro Plus",
    brand: "Therabody",
    category: "fitness",
    price: "£549.00",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800&q=80",
    ],
    shortReview:
      "The percussive therapy device that every athlete needs. Recovery has never felt this good.",
    fullReview: `I was sceptical about percussive therapy until I tried the Theragun. After three months of using the Pro Plus, my post-training recovery has improved dramatically and DOMS is noticeably reduced.

The Pro Plus adds heat and vibration to the standard percussive action, which makes it genuinely versatile. The heat attachment is particularly good for warming up cold muscles before training, while the cold attachment helps with acute soreness after intense sessions.

The device is well-built, feels premium in the hand, and the triangular design gives you excellent grip for reaching your back and shoulders. The app guides you through specific muscle group routines which I found surprisingly useful when starting out.

Noise levels are noticeably lower than older Theragun models — you can hold a conversation while using it. Battery lasts around 150 minutes of continuous use which covers many sessions between charges.`,
    valenVerdict: "The recovery tool that pays for itself in gym performance.",
    pros: [
      "Multi-therapy: percussion, heat, vibration",
      "Premium build quality",
      "Quiet QuietForce technology",
      "Guided routines via app",
      "150-min battery life",
    ],
    cons: ["Very expensive", "Heavy for extended overhead use", "App requires account"],
    whyIRecommend:
      "I use this every single day — before and after training. My legs recover faster, my shoulders feel looser, and my overall training quality has improved as a result.",
    scores: {
      performance: 10,
      value: 7,
      quality: 10,
      easeOfUse: 9,
      overall: 9.0,
    },
    platforms: ["youtube", "instagram", "tiktok"],
    platformLinks: {
      youtube: "https://youtube.com",
      instagram: "https://instagram.com",
      tiktok: "https://tiktok.com",
    },
    amazonLink: "https://amazon.co.uk",
    trending: false,
    onSale: true,
    salePrice: "£399.00",
    featured: true,
    latest: false,
    tags: ["recovery", "massage gun", "fitness", "theragun"],
    publishedAt: "2024-08-10",
  },

  // ─── BEAUTY ──────────────────────────────────────────────────────────────
  {
    id: "7",
    slug: "dyson-airwrap-multi-styler",
    name: "Dyson Airwrap Multi-Styler",
    brand: "Dyson",
    category: "beauty",
    price: "£479.99",
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
      "https://images.unsplash.com/photo-1487412947147-5cebf96ef2c4?w=800&q=80",
    ],
    shortReview:
      "Dyson has genuinely reinvented hair styling. The Coanda effect is real and it's remarkable.",
    fullReview: `The Dyson Airwrap is the most impressive hair styling tool I've reviewed. The Coanda effect — where air attracts and wraps hair around the barrel without extreme heat — sounds like marketing until you actually use it.

The results speak for themselves. Hair looks salon-finished, bouncy, and healthy. Because it relies on airflow rather than scorching heat, the damage profile is dramatically lower than conventional styling tools. For people concerned about heat damage, this is genuinely compelling.

The attachments are excellent and the barrel swap mechanism is smooth and satisfying. The round volumising brush is a revelation for anyone who struggles with blow-dry volume. Setup takes a little learning but once you have the technique, it's fast.

It's expensive — no question. But if you use it daily it pays for itself compared to salon visits, and your hair genuinely looks better. The long-term hair health benefits alone justify the price for heavy users.`,
    valenVerdict:
      "Transformative hair technology. Worth every pound if you care about your hair.",
    pros: [
      "Low-heat styling reduces damage",
      "Multiple attachments for all hair types",
      "Salon-quality results at home",
      "Premium build and presentation",
      "Intelligent heat control",
    ],
    cons: [
      "Very expensive",
      "Learning curve for technique",
      "Heavy for extended use",
    ],
    whyIRecommend:
      "My hair looks better than it ever has. The combination of lower heat and professional results is unmatched. This is a genuine long-term investment in hair health.",
    scores: {
      performance: 10,
      value: 7,
      quality: 10,
      easeOfUse: 8,
      overall: 9.3,
    },
    platforms: ["tiktok", "instagram", "youtube", "pinterest"],
    platformLinks: {
      tiktok: "https://tiktok.com",
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      pinterest: "https://pinterest.com",
    },
    amazonLink: "https://amazon.co.uk",
    trending: true,
    onSale: false,
    featured: true,
    latest: false,
    tags: ["hair", "dyson", "styling", "beauty"],
    publishedAt: "2024-07-05",
  },

  // ─── HOME ────────────────────────────────────────────────────────────────
  {
    id: "8",
    slug: "philips-hue-starter-kit",
    name: "Philips Hue Starter Kit",
    brand: "Philips",
    category: "home",
    price: "£99.99",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&q=80",
    ],
    shortReview:
      "Smart lighting that actually improves your daily life. The ambiance it creates is genuinely incredible.",
    fullReview: `Philips Hue transformed my home environment in a way I hadn't expected. I started with the starter kit in my living room and within two weeks had expanded to every room. The quality of light and the scenes you can create are genuinely mood-altering.

The app is one of the best smart home apps I've used — intuitive, reliable, and packed with useful features. Routines let you wake up gently with a sunrise simulation, wind down in the evening with warm amber tones, and create specific scenes for movies, work, or entertaining.

Integration with Alexa, Google Home, and Apple HomeKit means you can control everything with your voice or through your preferred smart home hub. The reliability of the Hue Bridge means lights respond instantly, unlike some Wi-Fi-based competitors.

Build quality of the bulbs is excellent — they're rated for 25,000 hours and in my experience they're consistent performers. The starter kit is good value as an entry point, and the ecosystem scales beautifully.`,
    valenVerdict: "The smart home investment that actually changes how you live.",
    pros: [
      "Best smart lighting ecosystem",
      "Gorgeous colour and warmth range",
      "Reliable Hue Bridge connectivity",
      "Works with all major smart home platforms",
      "Beautiful sunrise/sunset routines",
    ],
    cons: [
      "Hue Bridge required (included in starter kit)",
      "Expands fast — can get expensive",
      "Bulbs are pricier than standard smart bulbs",
    ],
    whyIRecommend:
      "My home feels completely different now. The right lighting for every moment — morning, work, relaxation, entertaining. It sounds small but it genuinely changes your mood.",
    scores: {
      performance: 9,
      value: 8,
      quality: 9,
      easeOfUse: 9,
      overall: 8.9,
    },
    platforms: ["instagram", "youtube", "tiktok"],
    platformLinks: {
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      tiktok: "https://tiktok.com",
    },
    amazonLink: "https://amazon.co.uk",
    trending: false,
    onSale: false,
    featured: false,
    latest: true,
    tags: ["smart home", "lighting", "philips hue", "home automation"],
    publishedAt: "2024-12-10",
  },

  // ─── GAMING ──────────────────────────────────────────────────────────────
  {
    id: "9",
    slug: "razer-deathadder-v3",
    name: "Razer DeathAdder V3",
    brand: "Razer",
    category: "gaming",
    price: "£89.99",
    images: [
      "https://images.unsplash.com/photo-1563297007-0686b7003af7?w=800&q=80",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    ],
    shortReview:
      "The gaming mouse that pros trust for a reason. Lightweight, fast, and brutally accurate.",
    fullReview: `The Razer DeathAdder V3 is the culmination of what Razer has learned from years of pro player feedback. At 63g it's the lightest DeathAdder ever, and the ergonomic design has been refined to something close to perfection for right-handed gamers.

The Focus Pro 30K optical sensor is exceptional. It tracks accurately on virtually every surface, has zero negative acceleration, and delivers pixel-perfect precision at any DPI setting. In fast-paced competitive games, this sensor genuinely makes a difference.

The optical switches have an actuation point of just 0.2mm, which means clicks register faster than any mechanical switch. Once you feel this in a competitive game, going back to mechanical feels sluggish. The scroll wheel, side buttons, and main clicks all feel premium and deliberate.

Battery life on wireless mode is rated at 90 hours. In my testing across a month of daily gaming sessions, that figure is accurate. USB-C fast charging means 15 minutes gives you enough for a full gaming session if you forget to charge.`,
    valenVerdict: "The gaming mouse I reach for when performance matters most.",
    pros: [
      "Exceptionally light at 63g",
      "Focus Pro 30K sensor",
      "Optical switches for faster clicks",
      "90-hour wireless battery",
      "Ergonomic right-hand design",
    ],
    cons: [
      "Right-handed only",
      "No RGB in this version",
      "Slippery without grips",
    ],
    whyIRecommend:
      "I switched from a heavier mouse and my aim improved noticeably within a week. The sensor and weight combination makes this the easiest recommendation I make to any PC gamer.",
    scores: {
      performance: 10,
      value: 9,
      quality: 9,
      easeOfUse: 10,
      overall: 9.5,
    },
    platforms: ["youtube", "tiktok"],
    platformLinks: {
      youtube: "https://youtube.com",
      tiktok: "https://tiktok.com",
    },
    amazonLink: "https://amazon.co.uk",
    trending: true,
    onSale: true,
    salePrice: "£69.99",
    featured: true,
    latest: false,
    tags: ["gaming", "mouse", "razer", "fps", "esports"],
    publishedAt: "2024-10-01",
  },
  {
    id: "10",
    slug: "samsung-odyssey-g7",
    name: "Samsung Odyssey G7 32\"",
    brand: "Samsung",
    category: "gaming",
    price: "£499.99",
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
      "https://images.unsplash.com/photo-1593640408182-31c228e90e4d?w=800&q=80",
    ],
    shortReview:
      "1440p, 240Hz, 1ms. The gaming monitor that makes everything else feel slow.",
    fullReview: `The Samsung Odyssey G7 is the gaming monitor I recommend to anyone who takes competitive gaming seriously. The combination of 1440p resolution, 240Hz refresh rate, and 1ms response time is genuinely transformative for fast-paced games.

The display is gorgeous. Colours are rich and accurate, blacks are deep, and the 1000R curve wraps your field of vision in a way that flat monitors can't match. HDR 600 support produces genuinely impressive highlight detail in compatible titles.

The build quality is excellent — the stand offers full height, tilt, and pivot adjustment with a satisfying mechanism. Cable management is thoughtful and clean. The monitor feels stable and premium in use.

For competitive games like Valorant, CS2, and Apex Legends, 240Hz is not a gimmick. Motion looks different — smoother, cleaner, more responsive. Once you've played at 240Hz, 60Hz feels like watching a slideshow.`,
    valenVerdict: "The monitor that made competitive gaming feel like cheating.",
    pros: [
      "240Hz for buttery smooth gameplay",
      "1440p resolution",
      "1000R immersive curve",
      "HDR 600 support",
      "Excellent build quality",
    ],
    cons: [
      "Premium price",
      "Requires powerful GPU to run at full spec",
      "Some bloom with HDR on",
    ],
    whyIRecommend:
      "I upgraded from a 144Hz flat panel and the difference was immediate. This monitor has meaningfully improved my competitive game. Best display investment I've made.",
    scores: {
      performance: 10,
      value: 8,
      quality: 9,
      easeOfUse: 9,
      overall: 9.3,
    },
    platforms: ["youtube", "instagram"],
    platformLinks: {
      youtube: "https://youtube.com",
    },
    amazonLink: "https://amazon.co.uk",
    trending: false,
    onSale: false,
    featured: false,
    latest: true,
    tags: ["gaming monitor", "4K", "samsung", "display"],
    publishedAt: "2024-11-28",
  },

  // ─── PETS ────────────────────────────────────────────────────────────────
  {
    id: "11",
    slug: "furbo-360-dog-camera",
    name: "Furbo 360° Dog Camera",
    brand: "Furbo",
    category: "pets",
    price: "£189.99",
    images: [
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80",
    ],
    shortReview:
      "Check in on your dog, talk to them, and toss treats — all from your phone. It's brilliant.",
    fullReview: `The Furbo 360° Dog Camera has completely changed how I manage leaving my dog home alone. The anxiety of not knowing what she's doing has gone — I can check in anytime, anywhere, and actually interact with her.

The 360° rotating camera gives a complete view of any room. The resolution is clear enough to see expressions and body language, and the two-way audio is lag-free enough for your dog to recognise your voice immediately. Watching her ears perk up when she hears me is genuinely heartwarming.

The treat toss feature is the star attraction. You fill the chamber with compatible treats, tap the button in the app, and the Furbo launches a treat a short distance. My dog worked out what the Furbo sound means within two days and now sits in front of it expectantly when she hears activity.

AI alerts for barking, whining, and motion are genuinely useful. The sleep mode means you don't get notified at 3am unless something unusual happens. For pet owners who work from an office or travel, this device provides real peace of mind.`,
    valenVerdict: "Peace of mind for every pet owner. I wouldn't leave home without it.",
    pros: [
      "360° rotating camera",
      "Crystal-clear two-way audio",
      "Fun treat toss feature",
      "Smart AI activity alerts",
      "Easy app setup",
    ],
    cons: [
      "Monthly subscription for full AI features",
      "Treat chamber requires regular refilling",
      "Can encourage attention-seeking behaviour",
    ],
    whyIRecommend:
      "My dog used to be anxious when I left. Now I check in every few hours, toss a treat, say hello — and her behaviour has genuinely improved. Worth every penny for peace of mind.",
    scores: {
      performance: 9,
      value: 8,
      quality: 8,
      easeOfUse: 10,
      overall: 8.8,
    },
    platforms: ["tiktok", "instagram"],
    platformLinks: {
      tiktok: "https://tiktok.com",
      instagram: "https://instagram.com",
    },
    amazonLink: "https://amazon.co.uk",
    trending: false,
    onSale: false,
    featured: false,
    latest: true,
    tags: ["pets", "dog camera", "furbo", "pet tech"],
    publishedAt: "2024-12-05",
  },

  // ─── MORE ────────────────────────────────────────────────────────────────
  {
    id: "12",
    slug: "kindle-paperwhite-5",
    name: "Kindle Paperwhite (11th Gen)",
    brand: "Amazon",
    category: "more",
    price: "£139.99",
    images: [
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&q=80",
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    ],
    shortReview:
      "The best e-reader ever made. Reading on paper has nothing on this display.",
    fullReview: `The Kindle Paperwhite 5th generation is the definitive e-reader. Amazon has refined this product to such a degree that there's nothing on the market that competes meaningfully.

The 6.8-inch 300ppi display is stunning. Text is crisp, the adjustable warm light means you can read comfortably at any time of day without straining your eyes, and glare is virtually non-existent even in bright sunlight. This display has genuinely replaced my preference for physical books.

The waterproof design (IPX8 rated for 2 metres for 60 minutes) means I read in the bath, by the pool, and at the beach without any concern. The light aluminium build is comfortable to hold for long sessions and fits in a coat pocket.

Battery life is exceptional — 10 weeks on a single charge is accurate in my experience. With Kindle Unlimited providing access to millions of titles, the value proposition is extraordinary. This is genuinely one of the best-value products I've ever recommended.`,
    valenVerdict: "The best way to read. Simple as that.",
    pros: [
      "300ppi Paperwhite display",
      "Adjustable warm light",
      "Waterproof IPX8",
      "10-week battery life",
      "Lightweight and portable",
    ],
    cons: [
      "Amazon ecosystem lock-in",
      "No physical page-turn buttons",
      "USB-C only (no wireless charging)",
    ],
    whyIRecommend:
      "I read a book a week. The Paperwhite has made that possible by making reading more convenient, comfortable, and enjoyable than physical books in almost every situation.",
    scores: {
      performance: 9,
      value: 10,
      quality: 9,
      easeOfUse: 10,
      overall: 9.6,
    },
    platforms: ["instagram", "youtube", "pinterest"],
    platformLinks: {
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
    },
    amazonLink: "https://amazon.co.uk",
    trending: true,
    onSale: true,
    salePrice: "£109.99",
    featured: true,
    latest: false,
    tags: ["kindle", "e-reader", "books", "amazon", "reading"],
    publishedAt: "2024-06-15",
  },
];

// ─── Helper functions ────────────────────────────────────────────────────────

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getTrending = (): Product[] =>
  products.filter((p) => p.trending);

export const getOnSale = (): Product[] =>
  products.filter((p) => p.onSale);

export const getFeatured = (): Product[] =>
  products.filter((p) => p.featured);

export const getLatest = (): Product[] =>
  [...products]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 6);

export const getByCategory = (category: string): Product[] =>
  products.filter((p) => p.category === category);

export const getByPlatform = (platform: string): Product[] =>
  products.filter((p) => p.platforms.includes(platform as any));

export const searchProducts = (query: string): Product[] => {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
  );
};

export const categories = [
  { id: "tech", label: "Tech", emoji: "💻", description: "Gadgets, audio, and electronics" },
  { id: "kitchen", label: "Kitchen", emoji: "🍳", description: "Appliances and cooking gear" },
  { id: "fitness", label: "Fitness", emoji: "🏃", description: "Training tools and wearables" },
  { id: "beauty", label: "Beauty", emoji: "✨", description: "Hair, skin, and self-care" },
  { id: "home", label: "Home", emoji: "🏠", description: "Smart home and décor" },
  { id: "gaming", label: "Gaming", emoji: "🎮", description: "Peripherals and setups" },
  { id: "pets", label: "Pets", emoji: "🐾", description: "Products for your pets" },
  { id: "more", label: "More", emoji: "⚡", description: "Everything else I love" },
] as const;

export const platforms = [
  { id: "tiktok", label: "TikTok", color: "#FF0050", handle: "@valen" },
  { id: "instagram", label: "Instagram", color: "#E1306C", handle: "@valen" },
  { id: "youtube", label: "YouTube", color: "#FF0000", handle: "Valen" },
  { id: "pinterest", label: "Pinterest", color: "#E60023", handle: "@valen" },
  { id: "facebook", label: "Facebook", color: "#1877F2", handle: "Valen" },
] as const;
