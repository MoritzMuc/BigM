interface NextEventModel  {
    title?: string;
    description?: string;
    date?: string;
    time?: string;
    location?: string;
    imageUrl?: string;
    link?: string;
}

export const UpcomingEvent: NextEventModel = {
    title: "Next Big Event",
    description: "Join us for the next big event where we will discuss the latest trends in technology and innovation.",
    date: "2023-10-15",
    time: "18:00",
    location: "123 Tech Street, Silicon Valley, CA",
}
