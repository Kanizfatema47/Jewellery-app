import React from 'react';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    BookmarkSquareIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorArrowRaysIcon,
    LifebuoyIcon,
    PhoneIcon,
    PlayIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import logo from '../../assests/logo/logo1.png'
const solutions = [
    {
        name: 'Analytics',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: ChartBarIcon,
    },
    {
        name: 'Engagement',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: CursorArrowRaysIcon,
    },
    { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
    {
        name: 'Integrations',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: Squares2X2Icon,
    },
    {
        name: 'Automations',
        description: 'Build strategic funnels that will drive your customers to convert',
        href: '#',
        icon: ArrowPathIcon,
    },
]
const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
    {
        name: 'Help Center',
        description: 'Get all of your questions answered in our forums or contact support.',
        href: '#',
        icon: LifebuoyIcon,
    },
    {
        name: 'Guides',
        description: 'Learn how to maximize our platform to get the most out of it.',
        href: '#',
        icon: BookmarkSquareIcon,
    },
    {
        name: 'Events',
        description: 'See what meet-ups and other events we might be planning near you.',
        href: '#',
        icon: CalendarIcon,
    },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
    { id: 1, name: 'Boost your conversion rate', href: '#' },
    { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
    { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Navbar = () => {

    return (
        <div className="">
            <Popover className="relative ">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex items-center justify-between border-b border-gray-100 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="#">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-auto w-auto "
                                    src={logo}
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="-my-2 -mr-2 md:hidden">
                            <Popover.Button className="inline-flex items-center justify-center rounded-md  p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                            <Popover className="relative">
                                {({ open }) => (
                                    <>
                                        <Popover.Button
                                            className={classNames(
                                                open ? 'text-gray-900' : 'text-gray-500',
                                                'group inline-flex items-center rounded-md  text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                            )}
                                        >
                                            <span>Solutions</span>
                                            <ChevronDownIcon
                                                className={classNames(
                                                    open ? 'text-gray-600' : 'text-gray-400',
                                                    'ml-2 h-5 w-5 group-hover:text-gray-500'
                                                )}
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                    <div className="relative grid gap-6  px-5 py-6 sm:gap-8 sm:p-8">
                                                        {solutions.map((item) => (
                                                            <a
                                                                key={item.name}
                                                                href={item.href}
                                                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                                            >
                                                                <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                                                <div className="ml-4">
                                                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                                </div>
                                                            </a>
                                                        ))}
                                                    </div>
                                                    <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                                        {callsToAction.map((item) => (
                                                            <div key={item.name} className="flow-root">
                                                                <a
                                                                    href={item.href}
                                                                    className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                                                >
                                                                    <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                                    <span className="ml-3">{item.name}</span>
                                                                </a>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>

                            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Pricing
                            </a>
                            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Docs
                            </a>

                            <Popover className="relative">
                                {({ open }) => (
                                    <>
                                        <Popover.Button
                                            className={classNames(
                                                open ? 'text-gray-900' : 'text-gray-500',
                                                'group inline-flex items-center rounded-md text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                            )}
                                        >
                                            <span>More</span>
                                            <ChevronDownIcon
                                                className={classNames(
                                                    open ? 'text-gray-600' : 'text-gray-400',
                                                    'ml-2 h-5 w-5 group-hover:text-gray-500'
                                                )}
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                    <div className="relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8">
                                                        {resources.map((item) => (
                                                            <a
                                                                key={item.name}
                                                                href={item.href}
                                                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                                            >
                                                                <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                                                <div className="ml-4">
                                                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                                </div>
                                                            </a>
                                                        ))}
                                                    </div>
                                                    <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                                                        <div>
                                                            <h3 className="text-base font-medium text-gray-500">Recent Posts</h3>
                                                            <ul role="list" className="mt-4 space-y-4">
                                                                {recentPosts.map((post) => (
                                                                    <li key={post.id} className="truncate text-base">
                                                                        <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                                                            {post.name}
                                                                        </a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className="mt-5 text-sm">
                                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                View all posts
                                                                <span aria-hidden="true"> &rarr;</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>
                        </Popover.Group>
                        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>

                          <div className='px-4'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                          </div>

                           
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>

                            {/* <a
                                href="#"
                                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                            >
                                Sign up
                            </a> */}

                        </div>
                    </div>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pt-5 pb-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                            alt="Your Company"
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-8">
                                        {solutions.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                                            >
                                                <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                                <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                            <div className="space-y-6 py-6 px-5">
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Pricing
                                    </a>

                                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Docs
                                    </a>
                                    {resources.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="text-base font-medium text-gray-900 hover:text-gray-700"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>

                                <div className='flex items-center justify-between border-t pt-5 border-gray-100 '>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>

                                    <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                        Sign in
                                    </a>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>

                                    {/* <p className="mt-6 text-center text-base font-medium text-gray-500">
                                        Existing customer?{' '}
                                        <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                            Sign in
                                        </a>
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    )
}



export default Navbar;