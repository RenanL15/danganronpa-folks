export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-20 text-xl bg-black max-sm:px-2 max-sm:py-16">
      <div className="flex items-center gap-3">
        <p className="font-['Open_Sans'] text-white">
          Developed with
          <i className="text-gray-200 fa-solid fa-heart mx-2 text-base"></i>by{" "}
          <a
            href="https://github.com/ScryptRG"
            target="blank"
            className="text-yellow-500 hover:border-b-2 hover:border-yellow-400"
          >
            ScryptRG
          </a>{" "}
          &copy; 2023
        </p>
      </div>
    </div>
  );
}
