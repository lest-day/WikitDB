import React from 'react';
import { useRouter } from 'next/router';
const config = require('../wikitdb.config.js');

const Header = () => {
    const router = useRouter();
    const currentWiki = router.query.wiki ?? config.SUPPOST_WIKI[0].PAEAM;
    const selectedWiki = config.SUPPOST_WIKI.find(
        w => w.PAEAM === currentWiki
    );
    return (
        <header className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" command="--toggle" commandfor="mobile-menu" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">打开顶栏</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 in-aria-expanded:hidden">
                                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 not-in-aria-expanded:hidden">
                                <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <a href="/" className="flex shrink-0 items-center">
                            <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="logo" className="h-8 w-auto" />
                            <span className="px-1.5 font-bold text-white">{config.SITE_NAME}</span>
                        </a>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <a href="/pages" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">页面</a>
                                <a href="/authors" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">作者</a>
                                <a href="/tools" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">工具</a>
                                <a href="/about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">关于</a>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="flex items-center gap-1 rounded-full bg-white/5 px-3 py-2 text-gray-300 hover:text-white" aria-label="Search">
                        <span className="sr-only">搜索</span>
                        <svg width="15" height="20" className="Search-Icon" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-2 sm:pr-0">
                        <el-select id="select" name="selected" key={currentWiki} value={currentWiki} className="hidden sm:block">
                            <button type="button" className="grid rounded-md bg-white/5 w-full cursor-default grid-cols-1 px-3 py-2 text-sm font-medium text-left text-gray-300 hover:text-white">
                                <el-selectedcontent className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                                    <img src={selectedWiki?.ImgURL} alt="" className="size-5 shrink-0 rounded-full bg-gray-700 outline -outline-offset-1 outline-white/10" />
                                    <span className="block truncate">{selectedWiki?.NAME}</span>
                                </el-selectedcontent>
                                <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-400 sm:size-4">
                                    <path d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" fillRule="evenodd" />
                                </svg>
                            </button>

                            <el-options anchor="bottom start" popover className="max-h-56 w-4xs overflow-auto rounded-md bg-gray-800 py-1 text-base [--anchor-gap:--spacing(1)] data-leave:transition data-leave:transition-discrete data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm">
                                {config.SUPPOST_WIKI.map((option, index) => (
                                    <el-option key={option.PAEAM} value={option.PAEAM} className="group/option relative block cursor-default py-2 pr-9 pl-3 text-sm font-medium text-gray-300 select-none focus:text-white">
                                        <div onClick={() => router.push({ pathname: router.pathname, query: { ...router.query, wiki: option.PAEAM } })} className="flex items-center cursor-pointer">
                                            <img src={option.ImgURL} alt="" className="size-5 shrink-0 rounded-full" />
                                            <span className="ml-3 block truncate font-normal group-aria-selected/option:font-semibold">{option.NAME}</span>
                                        </div>
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-400 group-not-aria-selected/option:hidden group-focus/option:text-white in-[el-selectedcontent]:hidden">
                                            <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="size-5">
                                                <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                                            </svg>
                                        </span>
                                    </el-option>
                                ))}
                            </el-options>
                        </el-select>
                    </div>
                </div>
            </div>

            <el-disclosure id="mobile-menu" hidden className="block sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    <div className="grid grid-cols-2 gap-2">
                        <a href="/pages" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">
                            <i className="fa-solid fa-file"></i> 页面
                        </a>
                        <a href="/authors" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">
                            <i className="fa-solid fa-user"></i> 作者
                        </a>
                        <a href="/tools" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">
                            <i className="fa-solid fa-toolbox"></i> 工具</a>
                        <a href="/about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">
                            <i className="fa-solid fa-circle-info"></i> 关于
                        </a>
                    </div>
                    <el-select id="select" name="selected" key={currentWiki} value={currentWiki} className="block pt-2">
                        <button type="button" className="grid rounded-md w-full cursor-default grid-cols-1 px-3 py-2 text-sm font-medium text-left text-gray-300 hover:bg-white/5 hover:text-white">
                            <el-selectedcontent className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                                <img src={selectedWiki?.ImgURL} alt="" className="size-5 shrink-0 rounded-full bg-gray-700 outline -outline-offset-1 outline-white/10" />
                                <span className="block truncate">{selectedWiki?.NAME}</span>
                            </el-selectedcontent>
                            <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-400 sm:size-4">
                                <path d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" fillRule="evenodd" />
                            </svg>
                        </button>

                        <el-options anchor="bottom start" popover className="max-h-56 w-4xs overflow-auto rounded-md bg-gray-800 py-1 text-base [--anchor-gap:--spacing(1)] data-leave:transition data-leave:transition-discrete data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm">
                            {config.SUPPOST_WIKI.map((option, index) => (
                                <el-option key={option.PAEAM} value={option.PAEAM} className="group/option relative block cursor-default py-2 pr-9 pl-3 text-sm font-medium text-gray-300 select-none focus:text-white">
                                    <div onClick={() => router.push({ pathname: router.pathname, query: { ...router.query, wiki: option.PAEAM } })} className="flex items-center cursor-pointer">
                                        <img src={option.ImgURL} alt="" className="size-5 shrink-0 rounded-full" />
                                        <span className="ml-3 block truncate font-normal group-aria-selected/option:font-semibold">{option.NAME}</span>
                                    </div>
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-400 group-not-aria-selected/option:hidden group-focus/option:text-white in-[el-selectedcontent]:hidden">
                                        <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="size-5">
                                            <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                                        </svg>
                                    </span>
                                </el-option>
                            ))}
                        </el-options>
                    </el-select>
                </div>
            </el-disclosure>
        </header>
    );
};

export default Header;
