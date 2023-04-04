import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header aria-label="Site Header" className="text-justify z-100 w-full">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <a className="block text-teal-600" href="/">
            <span className="sr-only">Home</span>
          </a>

          <div className="flex flex-1 items-center md:justify-between justify-between">
            <nav aria-label="Site Nav" className=" md:block ">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link className="text-gray-500 transition hover:text-gray-500/75" to="/">
                    Home
                  </Link>
                </li>

                <li>
                  <Link className="text-gray-500 transition hover:text-gray-500/75" to="/projects">
                    Projects
                  </Link>
                </li>

                <li>
                  <Link className="text-gray-500 transition hover:text-gray-500/75" to="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-500 transition hover:text-gray-500/75" to="/medville">
                    Medville
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
