export const bedroomData = [
  {
    id: 1,
    slug: "bed",
    title: "Bed",
    room: "Bedroom",
    idealDirections: [
    "Southwest"
  ],

  goodDirections: [
    "South"
  ],

  acceptableDirections: [
    "West"
  ],

  avoidDirections: [
    "Northeast"
  ],

  facing: [
    "South",
    "East"
  ],

    placement: "Place the bed in the southwest area of the bedroom.",
    reason: "Traditionally associated with stability and restful sleep.",
    avoid: "Center of room",
    tips: "Maintain circulation space around the bed.",
    image:"/images/bed.jpg",
     practicalNote:
    "If room layout prevents southwest placement, a south-wall arrangement is usually a practical alternative."
  },

  {
    id: 2,
    slug: "wardrobe",
    title: "Wardrobe",
    room: "Bedroom",
     idealDirections: [
    "Southwest"
  ],

  goodDirections: [
    "West",
    "South"
  ],

  acceptableDirections: [
    "Northwest"
  ],

  avoidDirections: [
    "Northeast"
  ],

  facing: [
    "North",
    "East"
  ],
    placement: "Place wardrobe on southwest wall.",
    reason: "Heavy storage is commonly recommended in southwest zones.",
     practicalNote:
    "If southwest space is unavailable due to windows or circulation, west is usually the next preferred option.",
    avoid: "Northeast corner",
    tips: "Avoid blocking windows.",
    image:"/images/wardrobe.jpg"
  },

  {
    id: 3,
    slug: "dressing-table",
    title: "Dressing Table",
    room: "Bedroom",
    idealDirections: [
    "North"
  ],

  goodDirections: [
    "East"
  ],

  acceptableDirections: [
    "Northwest"
  ],

  avoidDirections: [
    "Southwest"
  ],

  facing: [
    "East",
    "North"
  ],
    placement: "Position dressing table along north wall.",
    reason: "Allows good natural lighting in many layouts.",
    avoid: "Directly opposite bed",
    tips: "Provide sufficient lighting.",
    image:"/images/dressing-table.jpg",
     practicalNote:
    "The mirror angle is often more important than the exact wall location."
  },

  {
  id: 4,
  slug: "bedroom-mirror",
  title: "Bedroom Mirror",
  room: "Bedroom",
  image: "/images/bedroom-mirror.jpg",

  idealDirections: ["North", "East"],
  goodDirections: ["Northeast"],
  acceptableDirections: ["Northwest"],
  avoidDirections: ["Southwest"],

  facing: ["East", "North"],

  placement:
    "Place the mirror on the north or east wall, ensuring it does not directly reflect the bed.",

  reason:
    "North and east walls are commonly preferred due to light availability and balanced placement.",

  avoid:
    "Avoid positioning mirrors directly opposite the bed.",

  tips:
    "Use a covered mirror if direct reflection of the bed cannot be avoided.",

  practicalNote:
    "The reflection angle is usually more important than the exact wall location."
},

{
  id: 5,
  slug: "nightstand",
  title: "Nightstand",
  room: "Bedroom",
  image: "/images/nightstand.jpg",

  idealDirections: ["Southwest"],
  goodDirections: ["South", "West"],
  acceptableDirections: ["Northwest"],
  avoidDirections: ["Northeast"],

  facing: ["NA"],

  placement:
    "Place nightstands beside the bed for balanced access and convenience.",

  reason:
    "Proper placement improves functionality and visual balance.",

  avoid:
    "Avoid obstructing movement around the bed.",

  tips:
    "Use matching nightstands where possible for symmetry.",

  practicalNote:
    "Nightstands should support daily use more than strict directional rules."
},

{
  id: 6,
  slug: "locker",
  title: "Locker",
  room: "Bedroom",
  image: "/images/locker.jpg",

  idealDirections: ["Southwest"],
  goodDirections: ["West"],
  acceptableDirections: ["South"],
  avoidDirections: ["Northeast"],

  facing: ["North", "East"],

  placement:
    "Place the locker in the southwest portion of the room.",

  reason:
    "Heavy secure storage is commonly associated with southwest placement.",

  avoid:
    "Avoid northeast corners for bulky storage units.",

  tips:
    "Keep valuables organized and secure.",

  practicalNote:
    "If southwest is unavailable, a west-wall placement is often acceptable."
},

{
  id: 7,
  slug: "reading-chair",
  title: "Reading Chair",
  room: "Bedroom",
  image: "/images/reading-chair.jpg",

  idealDirections: ["East"],
  goodDirections: ["North"],
  acceptableDirections: ["Northeast"],
  avoidDirections: ["Southwest"],

  facing: ["North", "East"],

  placement:
    "Create a reading corner near natural light sources.",

  reason:
    "Good daylight improves comfort and readability.",

  avoid:
    "Avoid blocking circulation paths.",

  tips:
    "Add a floor lamp for evening reading.",

  practicalNote:
    "Window access and comfort matter more than exact direction."
},

{
  id: 8,
  slug: "study-corner",
  title: "Study Corner",
  room: "Bedroom",
  image: "/images/study-corner.jpg",

  idealDirections: ["East"],
  goodDirections: ["North"],
  acceptableDirections: ["Northeast"],
  avoidDirections: ["Southwest"],

  facing: ["East", "North"],

  placement:
    "Position the study desk so the user faces east or north while working.",

  reason:
    "These directions are traditionally associated with focus and learning.",

  avoid:
    "Avoid facing cluttered walls or distractions.",

  tips:
    "Ensure sufficient lighting and ventilation.",

  practicalNote:
    "Desk ergonomics and lighting quality are often more important than exact direction."
},
{
  id: 9,
  slug: "ceiling-fan",
  title: "Ceiling Fan",
  room: "Bedroom",
  image: "/images/ceiling-fan.jpg",

  idealDirections: ["Center"],
  goodDirections: [],
  acceptableDirections: [],
  avoidDirections: [],

  facing: ["NA"],

  placement:
    "Install the ceiling fan at the center of the room for balanced airflow.",

  reason:
    "A centrally placed fan distributes air more evenly throughout the bedroom.",

  avoid:
    "Avoid installing too close to walls or beams.",

  tips:
    "Maintain proper height clearance and clean blades regularly.",

  practicalNote:
    "Room layout and airflow efficiency are more important than directional considerations."
},

{
  id: 10,
  slug: "air-conditioner",
  title: "Air Conditioner",
  room: "Bedroom",
  image: "/images/air-conditioner.jpg",

  idealDirections: ["West", "Northwest"],
  goodDirections: ["North"],
  acceptableDirections: ["East"],
  avoidDirections: ["Directly Above Bed"],

  facing: ["East", "South"],

  placement:
    "Mount the AC on a wall that allows uniform airflow without blowing directly on occupants.",

  reason:
    "Comfortable airflow and efficient cooling improve usability.",

  avoid:
    "Avoid direct airflow onto the sleeping position.",

  tips:
    "Clean filters regularly and ensure proper servicing.",

  practicalNote:
    "The airflow path matters more than the exact compass direction."
},

{
  id: 11,
  slug: "bedroom-window",
  title: "Bedroom Window",
  room: "Bedroom",
  image: "/images/bedroom-window.jpg",

  idealDirections: ["East"],
  goodDirections: ["North"],
  acceptableDirections: ["Northeast"],
  avoidDirections: ["Blocked Openings"],

  facing: ["East", "North"],

  placement:
    "Provide windows where natural light and ventilation can be maximized.",

  reason:
    "Morning sunlight and fresh air improve room quality.",

  avoid:
    "Avoid permanently blocked or sealed windows.",

  tips:
    "Use curtains or blinds for light control and privacy.",

  practicalNote:
    "Window size, ventilation, and daylight access are more important than direction alone."
},

{
  id: 12,
  slug: "bedroom-door",
  title: "Bedroom Door",
  room: "Bedroom",
  image: "/images/bedroom-door.jpg",

  idealDirections: ["East", "North"],
  goodDirections: ["Northeast"],
  acceptableDirections: ["Northwest"],
  avoidDirections: ["Southwest"],

  facing: ["West", "South"],

  placement:
    "Position the bedroom door to provide convenient access and privacy.",

  reason:
    "Good circulation improves functionality and comfort.",

  avoid:
    "Avoid door swings that collide with furniture.",

  tips:
    "Ensure smooth movement and adequate clearance.",

  practicalNote:
    "Privacy and furniture layout should be prioritized."
},

{
  id: 13,
  slug: "tv-unit-bedroom",
  title: "Bedroom TV Unit",
  room: "Bedroom",
  image: "/images/tv-unit-bedroom.jpg",

  idealDirections: ["Southeast"],
  goodDirections: ["South"],
  acceptableDirections: ["East"],
  avoidDirections: ["Northeast"],

  facing: ["West", "North"],

  placement:
    "Place televisions and electronic equipment in the southeast part of the room when practical.",

  reason:
    "Electronic devices are often associated with the fire element in Vastu traditions.",

  avoid:
    "Avoid excessive glare and poor viewing angles.",

  tips:
    "Maintain a comfortable viewing distance and limit screen exposure before sleep.",

  practicalNote:
    "Cable management and viewing comfort are usually more important than exact placement."
},
{
  id: 14,
  slug: "indoor-plant-bedroom",
  title: "Bedroom Plant",
  room: "Bedroom",
  image: "/images/indoor-plant-bedroom.jpg",

  idealDirections: ["East"],
  goodDirections: ["North"],
  acceptableDirections: ["Northeast"],
  avoidDirections: ["Southwest"],

  facing: ["NA"],

  placement:
    "Place small indoor plants near east or north windows where they receive adequate light.",

  reason:
    "Plants add freshness and visual comfort to the bedroom.",

  avoid:
    "Avoid oversized plants that make the room feel crowded.",

  tips:
    "Choose low-maintenance indoor species.",

  practicalNote:
    "Good lighting and proper maintenance are more important than exact direction."
},

{
  id: 15,
  slug: "artwork-bedroom",
  title: "Bedroom Artwork",
  room: "Bedroom",
  image: "/images/artwork-bedroom.jpg",

  idealDirections: ["North"],
  goodDirections: ["East"],
  acceptableDirections: ["West"],
  avoidDirections: ["South"],

  facing: ["NA"],

  placement:
    "Display artwork on a visible feature wall that complements the room design.",

  reason:
    "Artwork enhances the atmosphere and character of the bedroom.",

  avoid:
    "Avoid disturbing, violent, or stressful imagery.",

  tips:
    "Choose calming artwork with pleasant colors.",

  practicalNote:
    "Artwork selection usually matters more than wall direction."
},

{
  id: 16,
  slug: "carpet-bedroom",
  title: "Bedroom Carpet",
  room: "Bedroom",
  image: "/images/carpet-bedroom.jpg",

  idealDirections: ["Center"],
  goodDirections: ["Southwest"],
  acceptableDirections: ["South"],
  avoidDirections: [],

  facing: ["NA"],

  placement:
    "Place the carpet beneath the bed area while maintaining sufficient visible flooring around it.",

  reason:
    "Adds warmth, comfort, and visual balance.",

  avoid:
    "Avoid loose edges that may become a tripping hazard.",

  tips:
    "Select a carpet size proportional to the room.",

  practicalNote:
    "Comfort and size are generally more important than directional placement."
},

{
  id: 17,
  slug: "chest-of-drawers",
  title: "Chest of Drawers",
  room: "Bedroom",
  image: "/images/chest-of-drawers.jpg",

  idealDirections: ["Southwest"],
  goodDirections: ["West"],
  acceptableDirections: ["South"],
  avoidDirections: ["Northeast"],

  facing: ["North", "East"],

  placement:
    "Place the chest of drawers along the southwest or west wall.",

  reason:
    "Heavy storage furniture is often preferred in these areas.",

  avoid:
    "Avoid blocking circulation paths and entrances.",

  tips:
    "Keep drawers organized and accessible.",

  practicalNote:
    "West wall placement is a practical alternative if southwest is unavailable."
},

{
  id: 18,
  slug: "bedside-lamp",
  title: "Bedside Lamp",
  room: "Bedroom",
  image: "/images/bedside-lamp.jpg",

  idealDirections: ["South"],
  goodDirections: ["Southwest"],
  acceptableDirections: ["West"],
  avoidDirections: [],

  facing: ["NA"],

  placement:
    "Place the bedside lamp on a nightstand within easy reach.",

  reason:
    "Provides convenient task and ambient lighting.",

  avoid:
    "Avoid excessive brightness before sleeping.",

  tips:
    "Use warm-colored bulbs for a relaxing atmosphere.",

  practicalNote:
    "Lighting quality is usually more important than direction."
},

{
  id: 19,
  slug: "curtains-bedroom",
  title: "Bedroom Curtains",
  room: "Bedroom",
  image: "/images/curtains-bedroom.jpg",

  idealDirections: ["East"],
  goodDirections: ["North"],
  acceptableDirections: ["West"],
  avoidDirections: [],

  facing: ["NA"],

  placement:
    "Install curtains on windows to control privacy and daylight.",

  reason:
    "Curtains improve comfort, privacy, and light management.",

  avoid:
    "Avoid undersized curtains that leave gaps.",

  tips:
    "Use blackout curtains if complete darkness is preferred.",

  practicalNote:
    "Fabric type and functionality matter more than direction."
},

{
  id: 20,
  slug: "laundry-basket",
  title: "Laundry Basket",
  room: "Bedroom",
  image: "/images/laundry-basket.jpg",

  idealDirections: ["West"],
  goodDirections: ["Southwest"],
  acceptableDirections: ["South"],
  avoidDirections: ["Center"],

  facing: ["NA"],

  placement:
    "Place the laundry basket in a discreet corner that remains easily accessible.",

  reason:
    "Helps maintain cleanliness and organization.",

  avoid:
    "Avoid placing it in the center of the room.",

  tips:
    "Empty regularly to prevent clutter.",

  practicalNote:
    "Accessibility and cleanliness are more important than directional placement."
}
];