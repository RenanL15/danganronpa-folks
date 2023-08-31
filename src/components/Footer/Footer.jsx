export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-24 text-3xl bg-gray-900 max-md:p-20 max-md:text-2xl max-sm:px-2 max-sm:py-16">
      <div className="flex items-center gap-3">
        <p className="font-['Electrolize'] text-white">
          Developed by:{" "}
          <a
            href="https://github.com/renanl15"
            target="blank"
            className="text-yellow-500 hover:border-b-2 hover:border-yellow-400">
            RenanL15
          </a>{" "}
        </p>
        <i className="text-xl text-gray-200 fa-solid fa-heart"></i>
      </div>
      <div className="flex gap-5 mt-2">
        <a href="https://github.com/renanl15" target="_blank">
          <i className="text-white duration-100 fa-brands fa-github hover:text-gray-400"></i>
        </a>
        <a href="https://linkedin.com/in/renan-almeida-lopes" target="_blank">
          <i className="text-white duration-100 fa-brands fa-linkedin hover:text-blue-600"></i>
        </a>
      </div>
    </div>
  );
}
