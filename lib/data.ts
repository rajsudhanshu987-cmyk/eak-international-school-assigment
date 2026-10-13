
export const school = {
  name: "EAK International School",
  short: "EAK",
  tagline: "A school day built around how children actually learn.",
  address: ["EAK International School", "14 Orchard Road, Sector 21", "Gurugram, Haryana 122001"],
  phone: ["+91 124 400 2100", "+91 98100 22100"],
  email: "office@eakschool.example",
  admissionsEmail: "admissions@eakschool.example",
  hours: [
    { day: "Monday to Friday", time: "8:00 am to 4:00 pm" },
    { day: "Saturday", time: "9:00 am to 1:00 pm" },
    { day: "Sunday and public holidays", time: "Closed" },
  ],
};

export const admissionsNote = "Admissions for 2027–28 open on 1 December";

export const social = [
  { name: "Instagram", href: "https://www.instagram.com/" },
  { name: "Facebook", href: "https://www.facebook.com/" },
  { name: "YouTube", href: "https://www.youtube.com/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/" },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/facilities", label: "Facilities" },
  { href: "/events", label: "Events & notices" },
  { href: "/contact", label: "Contact" },
];

export type SceneKind =
  | "classroom" | "lab" | "library" | "field" | "auditorium"
  | "bus" | "canteen" | "medical" | "computer" | "hostel" | "campus" | "art";

export type Period = { time: string; ampm: "am" | "pm"; name: string; scene: SceneKind; photo?: string; text: string };

export const day: Period[] = [
  { time: "8:10", ampm: "am", name: "Morning assembly", scene: "field", photo: "assembly", text: "The whole school gathers on the quad for ten minutes: a reading, a notice, one song. Class teachers take attendance on the way in." },
  { time: "8:30", ampm: "am", name: "Core lessons", scene: "classroom", text: "Two 45-minute periods of English, mathematics or languages. Classes cap at 28 students, with a second adult in every primary room." },
  { time: "10:00", ampm: "am", name: "Break and snack", scene: "canteen", text: "Twenty minutes outdoors. Fruit and a hot snack are served in the cafeteria, with a nut-free counter." },
  { time: "10:20", ampm: "am", name: "Lab and studio", scene: "lab", text: "Science, computing, art or music in a specialist room. Students from Grade 3 upward work in pairs on one experiment or build." },
  { time: "12:20", ampm: "pm", name: "Lunch and library", scene: "library", text: "A 45-minute lunch with the choice to read, play or join a club. The library stays open for quiet work." },
  { time: "1:15", ampm: "pm", name: "Project time", scene: "computer", text: "Open-ended work on a term project: a model, a survey, a short film. Teachers coach and students present every few weeks." },
  { time: "2:30", ampm: "pm", name: "Sport and clubs", scene: "field", text: "Football, cricket, swimming, chess, debate, robotics. Every student joins at least one activity each term." },
  { time: "3:30", ampm: "pm", name: "Dismissal", scene: "bus", text: "Buses leave in route order from the covered bay. Parents collecting by car use the north gate." },
];

export const strengths = [
  { title: "Small classes, known children", text: "28 students at most per class. Every child has a mentor teacher who sees their work each week." },
  { title: "Learning by making", text: "Each term ends in a project students build, test and present, from a working water filter to a school newspaper." },
  { title: "Two languages from Grade 1", text: "English and Hindi throughout, with French, Spanish or Sanskrit added from Grade 6." },
  { title: "Safe, tracked journeys", text: "GPS-tracked buses, trained attendants, and an app alert when your child boards and gets off." },
  { title: "Sport for everyone", text: "Twelve sports, a 25 m pool and a rule that no one is cut from a team before Grade 8." },
  { title: "Counselling on campus", text: "Two full-time counsellors and a school doctor, available without an appointment." },
];

export type Stage = {
  id: string; name: string; grades: string; age: string; summary: string;
  subjects: string[]; focus: string[]; scene: SceneKind;
};

export const stages: Stage[] = [
  {
    id: "primary", name: "Primary", grades: "Grades 1 to 5", age: "Ages 6 to 11",
    summary: "Reading, number sense and curiosity. Lessons are short, hands-on and mostly in mixed-ability groups.",
    subjects: ["English", "Hindi", "Mathematics", "Environmental studies", "Art and music", "Physical education"],
    focus: ["Phonics and reading fluency by the end of Grade 2", "Number sense with concrete materials", "One class project each term"],
    scene: "classroom",
  },
  {
    id: "middle", name: "Middle", grades: "Grades 6 to 8", age: "Ages 11 to 14",
    summary: "Subject teachers, lab work and a third language. Students learn to plan their own week and study with others.",
    subjects: ["English", "Hindi", "French, Spanish or Sanskrit", "Mathematics", "Science", "Social science", "Computer science"],
    focus: ["Structured lab work every week", "Study skills and note-taking taught explicitly", "An independent research project in Grade 8"],
    scene: "lab",
  },
  {
    id: "secondary", name: "Secondary", grades: "Grades 9 and 10", age: "Ages 14 to 16",
    summary: "CBSE board preparation with room for depth. Students choose an elective and begin career conversations.",
    subjects: ["English", "Hindi or elective language", "Mathematics", "Science", "Social science", "Information technology", "One elective"],
    focus: ["Board exam practice that begins in Grade 9", "Career counselling interviews in Grade 10", "Community service project"],
    scene: "library",
  },
  {
    id: "senior", name: "Senior Secondary", grades: "Grades 11 and 12", age: "Ages 16 to 18",
    summary: "Three streams, small seminar groups and guided university applications in India and abroad.",
    subjects: ["Science (PCM or PCB)", "Commerce with mathematics", "Humanities", "English core", "Optional: Computer science, Economics, Psychology"],
    focus: ["University and entrance exam mentoring", "Internships in Grade 11 summer", "A capstone thesis or portfolio"],
    scene: "computer",
  },
];

export const methods = [
  { title: "Ask first, explain second", text: "Lessons begin with a problem to try. Teachers explain after students have tested their own ideas." },
  { title: "Mixed-ability groups", text: "Students work in groups of four and rotate roles, so no one is always the speaker or the scribe." },
  { title: "Feedback over marks", text: "Until Grade 5, work comes back with comments, not scores. Marks start in Grade 6 with a clear rubric." },
  { title: "Reading every day", text: "Twenty minutes of silent reading is built into every timetable, in every grade." },
];

export const activities = [
  "Robotics", "Debate", "Football", "Cricket", "Swimming", "Chess", "Theatre", "Choir",
  "Model UN", "Photography", "Yoga", "Eco club", "Kathak", "Coding club",
];

export const achievements = [
  { year: "2026", title: "Inter-School Robotics Champions", detail: "Tech Innovators Club beat 42 teams at the North India finals.", tag: "Competition" },
  { year: "2026", title: "CBSE Grade 12: 98.4% pass with distinction", detail: "31 students scored above 95% in at least one subject.", tag: "Academic" },
  { year: "2025", title: "State under-14 football runners-up", detail: "First final in school history, lost 2–1 in extra time.", tag: "Sport" },
  { year: "2025", title: "National Science Olympiad: 6 medals", detail: "Two gold in Grade 8 and Grade 10 categories.", tag: "Academic" },
  { year: "2024", title: "Green School Award, Silver", detail: "Recognised for rainwater harvesting and zero single-use plastic.", tag: "Campus" },
];

export const stats = [
  { n: "1,240", label: "students from Grade 1 to 12" },
  { n: "13:1", label: "student to teacher ratio" },
  { n: "28", label: "students per class, at most" },
  { n: "12", label: "acres, with 7 of them green" },
  { n: "96", label: "teachers and counsellors" },
  { n: "21", label: "years since we opened" },
];

export type Facility = { id: SceneKind; name: string; cat: string; text: string; detail: string };

export const facilities: Facility[] = [
  { id: "classroom", name: "Smart classrooms", cat: "Learning", text: "Every room has a projector, a writing wall and a ceiling microphone for recorded lessons.", detail: "62 rooms, 28 seats each" },
  { id: "lab", name: "Science laboratories", cat: "Learning", text: "Separate physics, chemistry and biology labs, plus a junior lab for Grades 3 to 5.", detail: "4 labs, 24 work stations each" },
  { id: "computer", name: "Computer lab", cat: "Learning", text: "Two labs with 60 machines, a robotics bench and a 3D printer students book for projects.", detail: "Fibre internet, filtered" },
  { id: "library", name: "Library", cat: "Learning", text: "A quiet reading room with 22,000 books, a picture-book corner and a study loft for senior students.", detail: "Open 8:00 am to 4:30 pm" },
  { id: "field", name: "Sports complex", cat: "Sport", text: "A football field, two basketball courts, a cricket net, a 25 m heated pool and an indoor hall.", detail: "Coached sessions daily" },
  { id: "auditorium", name: "Auditorium", cat: "Arts", text: "A 600-seat hall with a sprung stage, used for assemblies, concerts and the annual play.", detail: "Acoustically treated" },
  { id: "canteen", name: "Cafeteria", cat: "Daily life", text: "Hot lunch cooked on site, a salad bar and a nut-free counter. Menus are posted weekly.", detail: "Vegetarian and Jain options" },
  { id: "medical", name: "Medical room", cat: "Daily life", text: "A school doctor on site from 8:00 am to 2:00 pm, two nurses and a quiet recovery room.", detail: "Ambulance on call" },
  { id: "bus", name: "Transport", cat: "Daily life", text: "52 buses on 38 routes, each with a trained attendant, a CCTV camera and GPS tracking.", detail: "Live tracking in the parent app" },
  { id: "hostel", name: "Hostel", cat: "Daily life", text: "Separate boarding houses for girls and boys from Grade 8, with resident wardens and study hours.", detail: "180 beds, weekly boarding" },
];

export const news = [
  { id: "n1", cat: "Notice", date: "2026-10-08", title: "Term 1 exam timetable released", text: "Grades 6 to 12 begin on 3 November. Download the datesheet from the parent portal." },
  { id: "n2", cat: "Circular", date: "2026-10-05", title: "Revised bus timings from 15 October", text: "Routes 12, 18 and 31 start ten minutes earlier because of road work on Sohna Road." },
  { id: "n3", cat: "Holiday", date: "2026-10-01", title: "School closed for Dussehra on 20 October", text: "Classes resume on Wednesday, 21 October. The office reopens the same day." },
  { id: "n4", cat: "Announcement", date: "2026-09-27", title: "Robotics team qualifies for nationals", text: "Eight students will travel to Pune in December. A send-off assembly is planned." },
  { id: "n5", cat: "Circular", date: "2026-09-22", title: "Parent-teacher meetings on 24 October", text: "Slots open on the portal at 6:00 pm on 16 October. Each meeting lasts ten minutes." },
  { id: "n6", cat: "Notice", date: "2026-09-18", title: "Flu vaccination camp, Grades 1 to 5", text: "Optional, by written consent. The school doctor will run the camp on 27 October." },
];

export const events = [
  { id: "e1", cat: "Competition", date: "2026-10-24", title: "Inter-house debate finals", text: "Four houses, one motion, and a panel of alumni judges.", place: "Auditorium", time: "10:00 am" },
  { id: "e2", cat: "Community", date: "2026-10-30", title: "Diwali mela", text: "Student stalls, rangoli and a food court. Proceeds go to the school scholarship fund.", place: "Main quad", time: "4:00 pm" },
  { id: "e3", cat: "Open house", date: "2026-11-07", title: "Admissions open house", text: "Tour the campus, meet teachers and ask the admissions team anything.", place: "Admin block", time: "9:30 am" },
  { id: "e4", cat: "Sport", date: "2026-11-14", title: "Annual sports day", text: "Track events, relays and the parents’ tug of war. Gates open at 8:00 am.", place: "Sports complex", time: "8:30 am" },
  { id: "e5", cat: "Arts", date: "2026-11-21", title: "Winter concert", text: "The school choir and orchestra perform with guest musicians.", place: "Auditorium", time: "5:30 pm" },
  { id: "e6", cat: "Academic", date: "2026-12-02", title: "Science exhibition", text: "Grades 5 to 12 present working models. Open to parents and neighbouring schools.", place: "Science block", time: "10:00 am" },
  { id: "e7", cat: "Competition", date: "2026-12-12", title: "National robotics finals send-off", text: "A farewell assembly for the team travelling to Pune.", place: "Main quad", time: "8:10 am" },
  { id: "e8", cat: "Arts", date: "2027-01-16", title: "Annual play: The Tempest, abridged", text: "Directed by Grade 12 students. Two evening shows.", place: "Auditorium", time: "6:00 pm" },
];

export const testimonials = [
  { quote: "My son used to hide his reading. By Grade 3 he was the one asking to read aloud in assembly. His teacher noticed before I did.", name: "Meera Kapoor", role: "Parent of a Grade 4 student" },
  { quote: "The robotics club taught me to fail in public and try again. That mattered more than the trophy.", name: "Aarav Singh", role: "Grade 12 student" },
  { quote: "We moved cities mid-year. The admissions team had a buddy, a bus route and a uniform plan ready within a week.", name: "Farhan and Zoya Qureshi", role: "Parents of Grade 7 and Grade 2 students" },
];

export const timeline = [
  { year: "2005", title: "Fifteen classrooms and a mango tree", text: "EAK opens with 210 students in Grades 1 to 5 on a rented campus." },
  { year: "2010", title: "The Orchard Road campus", text: "The school moves to its own 12-acre site and adds Grades 6 to 8." },
  { year: "2016", title: "First Grade 12 batch", text: "Forty-four students graduate. Thirty-one go on to universities abroad." },
  { year: "2021", title: "Learning without walls", text: "Hybrid teaching keeps every class running. Open-air classrooms are built afterwards." },
  { year: "2026", title: "1,240 students, one mission", text: "Twenty-one years in, class sizes are still capped at 28." },
];

export const values = [
  { title: "Curiosity", text: "Questions are as welcome as answers." },
  { title: "Integrity", text: "We say what we mean and own what we do." },
  { title: "Kindness", text: "Every adult and child on campus is treated with respect." },
  { title: "Persistence", text: "Struggle is part of learning, not a sign of failure." },
  { title: "Responsibility", text: "For each other, our campus and our city." },
];

export const admissionSteps = [
  { title: "Enquiry", text: "Fill the short enquiry form or visit the office. We will send you a prospectus and an open-house invitation.", time: "Day 1" },
  { title: "Application", text: "Complete the application form and upload documents. The fee is ₹1,500 and is not refundable.", time: "Within 7 days" },
  { title: "Interaction or assessment", text: "Grades 1 to 2: a 20-minute play-based interaction. Grades 3 to 12: a written test and a short conversation.", time: "Within 14 days" },
  { title: "Selection", text: "The admissions committee reviews results and sends an offer or a waiting-list note by email.", time: "Within 5 days" },
  { title: "Enrollment", text: "Pay the first-term fees and submit original documents. Your child receives a uniform fitting slot.", time: "Within 10 days of offer" },
];

export const eligibility = [
  { grade: "Grade 1", age: "6 years by 31 March", note: "Play-based interaction" },
  { grade: "Grades 2 to 5", age: "Age-appropriate", note: "Reading and number assessment" },
  { grade: "Grades 6 to 10", age: "Age-appropriate", note: "Written test and conversation" },
  { grade: "Grade 11", age: "Passed Grade 10, 60% or above", note: "Stream-based test" },
  { grade: "Grade 12", age: "Transfers only", note: "Considered when a seat is free" },
];

export const documents = [
  "Birth certificate (original and copy)",
  "Passport-size photographs of the child (4)",
  "Address proof of a parent or guardian",
  "Parent ID proof (Aadhaar or passport)",
  "Previous school report card, last two years",
  "Transfer certificate (Grade 2 and above)",
  "Immunisation record",
  "Medical history form, if applicable",
];

export const dates = [
  { date: "2026-11-07", label: "Open house", detail: "Campus tour and Q&A" },
  { date: "2026-12-01", label: "Applications open", detail: "For the 2027–28 session" },
  { date: "2027-01-15", label: "Early application deadline", detail: "Interactions held in the last week of January" },
  { date: "2027-02-20", label: "First offers sent", detail: "Waiting list opens" },
  { date: "2027-03-31", label: "Enrollment closes", detail: "Fees due for confirmed seats" },
  { date: "2027-04-05", label: "Session begins", detail: "Orientation for new families on 1 April" },
];

export const faqs = [
  { q: "How many seats are there in each grade?", a: "Each grade has four sections of 28. Seats in Grades 9 to 12 depend on transfers." },
  { q: "Can we apply after the deadline?", a: "Yes. Late applications are considered if seats remain. Write to the admissions team and we will tell you within three working days." },
  { q: "Do you offer scholarships?", a: "We offer merit scholarships from Grade 6 and need-based support at every grade. Apply with your admission form." },
  { q: "What does the first year cost?", a: "Tuition for Grades 1 to 5 is ₹2,10,000 a year, paid termly. Transport, meals and the hostel are charged separately. A full fee sheet comes with the prospectus." },
  { q: "My child is moving mid-year. Is that possible?", a: "Yes, if there is a seat. We hold a short assessment within a week and match your child with a buddy for their first month." },
  { q: "Which board does the school follow?", a: "EAK is CBSE affiliated. Grades 9 to 12 follow the board syllabus and sit board exams. Earlier grades use our own project-based framework, aligned to NCERT outcomes." },
];

export const principal = {
  name: "Dr. Ananya Rao",
  role: "Principal",
  short: "A good school is not the one with the best results. It is the one where a child can be wrong in front of a teacher and still want to come back tomorrow.",
  long: [
    "When I joined EAK eleven years ago, I made a list of the questions parents asked me at the gate. Almost none were about marks. They asked if their child was happy, if someone would notice when they were struggling, and if they would be safe.",
    "Our work is to answer those questions every day, in small ways. Teachers who know every child's name by the second week. Buses that wait. A counsellor with an open door. A timetable with room to read.",
    "Results follow from that. I invite you to visit, sit in on a class and judge for yourself.",
  ],
};

export const fees = [
  { stage: "Primary", grades: "Grades 1 to 5", tuition: "₹2,10,000" },
  { stage: "Middle", grades: "Grades 6 to 8", tuition: "₹2,40,000" },
  { stage: "Secondary", grades: "Grades 9 and 10", tuition: "₹2,70,000" },
  { stage: "Senior Secondary", grades: "Grades 11 and 12", tuition: "₹3,00,000" },
];

export const extraFees = [
  { item: "Application fee", amount: "₹1,500", note: "One time, not refundable" },
  { item: "Admission fee", amount: "₹25,000", note: "One time, paid at enrollment" },
  { item: "Transport", amount: "₹36,000 to ₹54,000", note: "A year, depending on the route" },
  { item: "Cafeteria meals", amount: "₹30,000", note: "A year, optional" },
  { item: "Hostel", amount: "₹1,80,000", note: "A year, Grade 8 and above" },
];
