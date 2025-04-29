import { useState } from "react";
import Navbar from "../src/components/Navbar";
import CardSection from "../src/components/CardSection";
import CounterSection from "../src/components/CounterSection";

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const response = {
    page: 1,
    results: [
      {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
        image: "https://picsum.photos/500",
        category: "profile"
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
        image: "https://picsum.photos/500",
        category: "home"
      },
      {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
        image: "https://picsum.photos/500",
        category: "about me"
      },
      {
        userId: 1,
        id: 4,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        image: "https://picsum.photos/500",
        category: "contact"
      },
      {
        userId: 1,
        id: 5,
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque",
        image: "https://picsum.photos/500",
        category: "home"
      },
    ],
  };

  return (
    <div className="min-h-screen w-screen bg-gray-50">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div>
        <CounterSection />
        <CardSection 
          id="card-section"
          title="Card Components"
          subtitle="This a card component section for testing"
          results={response.results}
        />
      </div>
    </div>
  )
}