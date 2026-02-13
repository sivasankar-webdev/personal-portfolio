export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center px-4 pb-10 text-center text-gray-500 dark:bg-darkBg">
      <section className="max-w-[28rem]">
        {/* <small className="mb-2 block text-xs">
          &copy; 2025. All rights reserved.
        </small> */}
        <p className="text-xs">
          <span className="font-semibold">
            Open to collaborations, opportunities, and meaningful discussions.
          </span>{' '}
          Feel free to reach out and start the conversation.
        </p>
      </section>
    </footer>
  );
}
