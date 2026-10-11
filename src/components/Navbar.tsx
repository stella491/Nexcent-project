import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="bg-[#F5F7FA]">
      <nav className="flex items-center justify-between px-5 py-5 md:px-10 lg:px-[105px]">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/images/nex-Icon.svg"
            alt="Nexcent icon"
            className="w-8 h-8"
          />
          <img
            src="/images/Nexcent.svg"
            alt="Nexcent"
            className="w-24 sm:w-28"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-[50px] text-[16px] font-medium font-[Inter] leading-6">
          <a href="#" className="hover:text-[#4CAF4F]">Home</a>
          <a href="#" className="hover:text-[#4CAF4F]">Service</a>
          <a href="#" className="hover:text-[#4CAF4F]">Feature</a>
          <a href="#" className="hover:text-[#4CAF4F]">Product</a>
          <a href="#" className="hover:text-[#4CAF4F]">Testimonial</a>
          <a href="#" className="hover:text-[#4CAF4F]">FAQ</a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-[14px]">
          <a
            href="#"
            className="text-[#4CAF4F] text-sm font-medium"
          >
            Login
          </a>

          <a
            href="#"
            className="text-white bg-[#4CAF4F] rounded-md px-5 py-2.5 text-sm font-medium hover:bg-[#388E3C] transition"
          >
            Sign up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-800 text-3xl focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden px-5 pb-5 md:px-10">
          <div className="flex flex-col gap-4 text-[16px] font-medium font-[Inter]">
            <a href="#" onClick={() => setIsOpen(false)} className="hover:text-[#4CAF4F]">Home</a>
            <a href="#" onClick={() => setIsOpen(false)} className="hover:text-[#4CAF4F]">Service</a>
            <a href="#" onClick={() => setIsOpen(false)} className="hover:text-[#4CAF4F]">Feature</a>
            <a href="#" onClick={() => setIsOpen(false)} className="hover:text-[#4CAF4F]">Product</a>
            <a href="#" onClick={() => setIsOpen(false)} className="hover:text-[#4CAF4F]">Testimonial</a>
            <a href="#" onClick={() => setIsOpen(false)} className="hover:text-[#4CAF4F]">FAQ</a>

            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-[#4CAF4F] text-sm font-medium">
                Login
              </a>

              <a
                href="#"
                className="text-white bg-[#4CAF4F] rounded-md px-5 py-2.5 text-sm font-medium"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Navbar