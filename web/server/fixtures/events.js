var events = [
  "4 Ways to Learn How to Code",
  "8 Types of People That Benefit From Talentbuddy’s Mentorship Program",
  "What’s the Talentbuddy Mentorship Experience Like?",
  "Talentbuddy's Full-Stack Web Development Program Explained",
  "Talentbuddy's Front-End Web Development Program Explained",
  "Top Tech Skills Required for Entry-Level Programming Jobs",
  "Interview with Emily Lam, a Talentbuddy Alumna",
  "Talentbuddy Mentorship FAQ",
  "How is a Talentbuddy Mentorship Different From Inexpensive Tutorials?",
  "Can You Cut This Paper?",
  "Solution - Can You Cut This Paper?",
  "Interview with Yuichi Hagio, a Talentbuddy Alumnus",
  "7 Things You Need to Know to Become a Better Programmer",
  "How Will Tech Skills Help Me Run My Startup?",
  "3 Math Problems That Could Catch You Off Guard In Interviews For Junior Software Developer Jobs",
  "Interview With Kevin Kim, A Talentbuddy Alumnus",
  "10 Facts You Didn’t Know About A Particular Full Stack Developer",
  "When Engineers Do Halloween",
  "Building with Ember.js",
  "Building With Node.js",
  "Growing As A Developer With No Formal Computer Science Background",
  "Determining An Algorithm's Complexity: The Basics",
  "Building With Ember.js At Yahoo",
  "Building With Ember.js at Groupon",
  "Top Reasons Why Industry Experts Use Ember.js And How You Can Adopt It Yourself",
  "From Running A Motorcycle Business Out Of A Garage to Building Full Stack Web Apps",
  "Building With Ember.js At DockYard",
  "From Finance To Building Full Stack Web Applications"
];

var referrers = [
  "https://mail.mozilla.org/pipermail/firefox-dev/2014-December/002510.html",
  "http://en.chessbase.com/post/magnus-carlsen-on-his-che-career",
  "http://www.esa.int/Our_Activities/Space_Science/Rosetta/Rosetta_fuels_debate_on_origin_of_Earth_s_oceans",
  "http://www.wired.com/2014/12/pubpeer-fights-for-anonymity/",
  "http://nextcity.org/features/view/the-city-that-is-moving-9-kilometers-down-the-road",
  "http://www.cbc.ca/news/world/james-watson-s-nobel-prize-sold-at-auction-will-be-returned-to-him-1.2866994",
  "https://buttercoin.com/#/setup?r=D6YDrSLZ6GX",
  "http://www.theverge.com/2014/12/10/7341077/nypd-harlem-crews-social-media-rikers-prison",
  "http://engineering.clever.com/2014/12/10/when-your-ip-traffic-in-aws-disappears-into-a-black-hole/",
  "http://blog.saynotolinux.com/blog/2014/12/09/seizing-control-of-yahoo-mail-cross-origin-again/",
  "http://pudo.org/blog/2014/12/03/newsclipse.html",
  "http://blog.foundationdb.com/databases-at-14.4mhz",
  "http://elm-lang.org/blog/announce/0.14.elm",
  "http://www.bloomberg.com/news/2014-12-10/mysterious-08-turkey-pipeline-blast-opened-new-cyberwar.html",
  "http://www.crainsdetroit.com/article/20141210/BLOG007/141219993/techstars-to-open-shop-in-detroit",
  "http://blog.postmates.com/post/104856354257/powering-on-demand-logistics",
  "https://medium.com/the-physics-arxiv-blog/high-temperature-superconductivity-record-smashed-by-sulphur-hydride-c853795079bb",
  "https://www.quantamagazine.org/20141210-prime-gap-grows-after-decades-long-lull/",
  "http://radar.oreilly.com/2014/12/wouldnt-it-be-fun-to-build-your-own-google.html",
  "http://verbling.com/jobs",
  "http://www.paperplanes.de/2014/12/10/from-open-to-minimum-vacation-policy.html",
  "http://kukuruku.co/hub/diy/diy-an-astro-tracker-in-two-nights",
  "http://www.deeproot.com/blog/blog-entries/onetrees-the-forgotten-tree-art-project",
  "http://www.nybooks.com/articles/archives/2014/nov/20/creepy-new-wave-internet/?",
  "http://googleresearch.blogspot.com/2014/12/automatically-making-sense-of-data.html",
  "http://blog.heapanalytics.com/speeding-up-postgresql-with-partial-indexes/",
  "http://www.theguardian.com/technology/2014/dec/10/intelligent-food-expiry-label-waste-bump-mark",
  "http://chimera.labs.oreilly.com/tags/featured"
];

var eventObjects = [];
for (var i = 0; i < events.length; i++) {
  eventObjects.push([events[i], referrers[i]]);
}

module.exports = eventObjects;
