import React from 'react';
const config = require('../wikitdb.config.js');

const Header = () => {
    return (
        <header class="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" command="--toggle" commandfor="mobile-menu" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white">
                            <span class="absolute -inset-0.5"></span>
                            <span class="sr-only">Open main menu</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 in-aria-expanded:hidden">
                                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 not-in-aria-expanded:hidden">
                                <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <a href="/" class="flex shrink-0 items-center">
                            <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="logo" class="h-8 w-auto" />
                            <span class="px-1.5 font-bold text-white">{config.SITE_NAME}</span>
                        </a>
                        <div class="hidden sm:ml-6 sm:block">
                            <div class="flex space-x-4">
                                <el-select id="select" name="selected" value="4" class="block">
                                    <button type="button" class="grid rounded-md w-full cursor-default grid-cols-1 px-3 py-2 text-sm font-medium text-left text-gray-300 hover:bg-white/5 hover:text-white">
                                        <el-selectedcontent class="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                                            <img src="./img/wikidot.png" alt="" class="size-5 shrink-0 rounded-full bg-gray-700 outline -outline-offset-1 outline-white/10" />
                                            <span class="block truncate">Wikidot</span>
                                        </el-selectedcontent>
                                        <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" class="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-400 sm:size-4">
                                            <path d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                        </svg>
                                    </button>

                                    <el-options anchor="bottom start" popover class="max-h-56 w-3xs overflow-auto rounded-md bg-gray-800 py-1 text-base [--anchor-gap:--spacing(1)] data-leave:transition data-leave:transition-discrete data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm">
                                        {config.SUPPOST_WIKI.map((option, index) => (
                                            <el-option value="1" class="group/option relative block cursor-default py-2 pr-9 pl-3 text-sm font-medium text-gray-300 select-none focus:text-white">
                                                <a href={`?wiki=${option.PAEAM}`} className="flex items-center">
                                                    <img src={option.ImgURL} alt="" class="size-5 shrink-0 rounded-full" />
                                                    <span class="ml-3 block truncate font-normal group-aria-selected/option:font-semibold">{option.NAME}</span>
                                                </a>
                                                <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-400 group-not-aria-selected/option:hidden group-focus/option:text-white in-[el-selectedcontent]:hidden">
                                                    <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="size-5">
                                                        <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </el-option>
                                        ))}
                                    </el-options>
                                </el-select>
                                <a href="/pages" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">页面</a>
                                <a href="/authors" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">作者</a>
                                <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">工具</a>
                                <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">关于</a>
                            </div>
                        </div>
                    </div>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" class="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
                            <span class="absolute -inset-1.5"></span>
                            <span class="sr-only">View notifications</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6">
                                <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <el-disclosure id="mobile-menu" hidden class="block sm:hidden">
                <div class="grid grid-cols-2 space-y-1 px-2 pt-2 pb-3">
                    <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">页面</a>
                    <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">作者</a>
                    <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">工具</a>
                    <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">关于</a>
                </div>
            </el-disclosure>
        </header>
    );
};

export default Header;