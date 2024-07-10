export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-20 text-xl bg-gray-900 max-sm:px-2 max-sm:py-16">
      <div className="flex items-center gap-3">
        <p className="font-['Electrolize'] text-white">
          Developed by:{" "}
          <a
            href="https://github.com/ScryptRG"
            target="blank"
            className="text-yellow-500 hover:border-b-2 hover:border-yellow-400"
          >
            ScryptRG
          </a>{" "}
        </p>
        <i className="text-gray-200 fa-solid fa-heart"></i>
      </div>
      <div className="flex gap-5 mt-2">
        <a href="https://github.com/ScryptRG" target="_blank">
          <i className="text-white duration-100 fa-brands fa-github hover:text-gray-400"></i>
        </a>
        <a href="https://linkedin.com/in/renan-almeida-lopes" target="_blank">
          <i className="text-white duration-100 fa-brands fa-linkedin hover:text-blue-600"></i>
        </a>
      </div>
    </div>
  );
}
