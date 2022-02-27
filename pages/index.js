import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image: "https://wallpaperaccess.com/full/359168.jpg",
    address: "Some address",
    description: "This is first meetup",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image: "https://wallpaperaccess.com/full/359168.jpg",
    address: "Some address",
    description: "This is second meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
