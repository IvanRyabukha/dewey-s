import { useState } from "react";

export function SubscribeForm() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!inputValue) return;

    alert(`Subscribed with email: ${inputValue}`);
    setInputValue('');
  };

  return (
    <section>
      <h3 className="font-bold text-lg mb-1">Subscribe to all the news</h3>
      <p className="text-sm text-neutral-600 mb-3">
        Never miss the latest updates.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email address"
          className="border border-neutral-300 px-3 py-2 text-sm
            focus:outline-none focus:ring-1 focus:ring-black"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-black text-white py-3 font-medium uppercase
            tracking-wide hover:opacity-80 transition font-oswald"
        >
          Sign Me Up
        </button>
      </form>
    </section>
  );
}

