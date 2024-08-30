import { useState } from 'react';
// import Button from '../../Ui/Button';
import art1 from '../../assets/imgs/articles/art1.jfif';
import art2 from '../../assets/imgs/articles/art2.jfif';
import art3 from '../../assets/imgs/articles/art3.jfif';
import art4 from '../../assets/imgs/articles/art4.jfif';
import art5 from '../../assets/imgs/articles/art5.jfif';
import art6 from '../../assets/imgs/articles/art6.jfif';
import Title from "../../components/Titlesections/Title";

const AllBlogs = () => {
    const blogs = [
        { img: art1, date: 'June 6, 2024', title: 'Online hifz Classes', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor' },
        { img: art2, date: 'June 6, 2024', title: 'Online hifz Classes', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor' },
        { img: art3, date: 'June 6, 2024', title: 'Online hifz Classes', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor' },
        { img: art4, date: 'June 6, 2024', title: 'Online hifz Classes', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor' },
        { img: art5, date: 'June 6, 2024', title: 'Online hifz Classes', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor' },
        { img: art6, date: 'June 6, 2024', title: 'Online hifz Classes', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor' },
        { img: art1, date: 'June 6, 2024', title: 'Online hifz Classes', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor' },
        { img: art2, date: 'June 6, 2024', title: 'Online hifz Classes', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor' },
        { img: art3, date: 'June 6, 2024', title: 'Online hifz Classes', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor' },
        { img: art4, date: 'June 6, 2024', title: 'Online hifz Classes', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor' },
        { img: art5, date: 'June 6, 2024', title: 'Online hifz Classes', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor' },
        { img: art6, date: 'June 6, 2024', title: 'Online hifz Classes', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor' },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const coursesPerPage = 5;

    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = blogs.slice(indexOfFirstCourse, indexOfLastCourse);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(blogs.length / coursesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex flex-col items-center justify-start pb-20 max-sm:mt-12 px-4 sm:mt-12 xl:mt-28">
            <div className="flex text-start justify-start max-sm:mb-8 sm:mb-3 md:mb-8 lg:mb-16">
                <Title name={'Check Our Blogs Here'} />
            </div>
            <div className="grid max-w-screen-lg w-full lg:text-lg gap-7 max-sm:grid-cols-1 max-sm:gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 mb-20">
                {currentCourses.map((item, index) => (
                    <div key={index} className="h-[400px]">
                        <div className="w-8/9 bg-transparent m-0 group cursor-pointer h-60 max-sm:h-48 mb-16 max-sm:mb-28 relative">
                            <figure className="overflow-hidden rounded-xl h-full w-full">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="object-cover h-full w-full scale-100 group-hover:scale-110 ease-in duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.828 12l-3.535 3.536 1.414 1.414L12.95 12 8.707 7.05l-1.414 1.414L10.828 12zM17 12c0-1.657-1.343-3-3-3h-4V7h4c2.757 0 5 2.243 5 5s-2.243 5-5 5h-4v-2h4c1.657 0 3-1.343 3-3z"></path>
                                    </svg>
                                </div>
                            </figure>
                            <div className="mt-2 pl-2">
                                <p className="text-[#ffb921]">{item.date}</p>
                                <span className="text-primary font-bold text-2xl">{item.title}</span>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="join">
                {pageNumbers.map(number => (
                    <button
                        key={number}
                        className={`join-item bg-primary btn-sm ${number === currentPage ? 'bg-[#ffb921] text-white' : ''}`}
                        onClick={() => setCurrentPage(number)}
                    >
                        {number}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default AllBlogs;
