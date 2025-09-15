// src/lib/fetchBlogs.js
export async function fetchBlogs() {
  const res = await fetch("https://oresamsub.com/api/luminox");
  const json = await res.json();

  // exclusion keywords (lowercase)
  const excluded = [
    "home", "services", "forms", "about us", "blog", "welcome",
    "sitemap", "contact us", "submit your referrals", "testimonials",
    "meet our professionals", "psychiatric assessments", "insurance accepted",
    "stress management", "ptsd treatment", "crisis intervention",
    "insurance and coverage options", "favicon", "medication refills",
    "thumb", "treatment planning", "psychotherapy (individual, group, family)",
    "second opinions", "medication management", "support for specific conditions",
    "addiction treatment", "child and adolescent psychiatry", "follow-up and monitoring",
    "education and psychoeducation", "provider collaboration", "geriatric psychiatry",
    "cancellation fee form", "telepsychiatry consent form", "consent for treatment form",
    "katie-crawford-2", "screenshot", "attention-deficit-hyperactivity-disorder",
    "jaula", "fear_orig", "sister-brother-concept-boy-girl", "the reach", 
    "main menu","logo luminox","therapy","grief",
    "auto draft","bipolar disorder","night-people-bob-orsillo",
    "mental health medication services", "autism", 
    "how-to-overcome-adjustment-disorder", 
    "kleptomania", "olympus digital camera",
    "privacy policy",
    "child psychiatry", "it doesn’t have to take over your life", "pexels-cottonbro-studio-6951522", 
    "opioids-use", "young girl addicted to drugs with hallucinations against blurred background",
    "depositphotos_98049228-stock-photo-standing-woman-pinching-her-hip",
    "gettyimages-481812985-2000-93b6c7faae364c9ab8b5646701488972", 
    "custom styles"
  ];

  const seenTitles = new Set();

  // ✅ helper function to strip unwanted Gutenberg + inline tags
  const cleanText = (text = "") =>
    text
      // remove ALL Gutenberg comments like <!-- wp:paragraph -->, <!-- /wp:paragraph -->
      .replace(/<!--.*?-->/g, "")
      // remove <p> and </p>
      .replace(/<\/?p>/gi, "")
      // remove leftover whitespace
      .trim();

  const filtered = json.data
    .map((item) => ({
      id: item.ID,
      title: cleanText(item.post_title?.trim() || ""),
      description: cleanText(
        item.post_excerpt ||
          (item.post_content ? item.post_content.slice(0, 200) + "..." : "")
      ),
      image: item.featured_image || "/assets/blogfeat-five.png",
      date: item.post_date
        ? new Date(item.post_date).toLocaleDateString()
        : "Unknown date",
      author: "Dr. Adurota", // fallback if author info missing
      content: cleanText(item.post_content || ""),
    }))
    .filter((post) => {
      const title = post.title?.toLowerCase() || "";

      // skip if no title
      if (!title) return false;

      // skip duplicates
      if (seenTitles.has(title)) return false;
      seenTitles.add(title);

      // skip if starts with excluded words
      if (excluded.some((word) => title.startsWith(word))) return false;

      // skip if starts with a number
      if (/^\d/.test(title)) return false;

      // skip if starts with disallowed prefixes
      if (
        title.startsWith("thumb") ||
        title.startsWith("images (4)") ||
        title.startsWith("page") ||
        title.startsWith("child psychiatry") ||
        title.startsWith("pexels-") ||
        title.startsWith("opioids-use") ||
        title.startsWith("gettyimages") ||
        title.startsWith("istockphoto") ||
        title.startsWith("pasted-image-0") ||
        title.startsWith("logo luminox") ||
        title.startsWith("privacy policy") ||
        title.startsWith("kleptomania") ||
        title.startsWith("olympus digital camera") ||
        title.startsWith("custom styles")
      ) {
        return false;
      }

      return true;
    });

  // ✅ Only return the first 15 posts
  return filtered.slice(0, 15);
}
