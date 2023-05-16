"use client"
import Link from 'next/link'
import React, { FormEvent, useState } from 'react'
import styles from "./header.module.css"
import * as SVG from "@/public/imgs/svg_converted"

function Header() {

    const [menuVisible, setMenuVisible] = useState<boolean>(false)
    const [windowWidth] = useState<number>(window.innerWidth)

    function setExpandMenu() {

        setMenuVisible(!menuVisible)

    }

    function userLogin(e: FormEvent) {

        //todo

    }

    function userLogout() {

        //todo

    }

    function handleSearchForm(e: FormEvent) {

        //todo

    }

    return (
        <header id={styles.header_container}>

            <small className={styles.max_width}>WELCOME!</small>

            <nav>
                <div id={styles.brand_cart_container} className={`${styles.max_width}`}>

                    <Link href={"/"}><span style={{ fontStyle: "italic", marginBottom: "16px", display: "block" }}>PLACEHOLDER</span></Link>

                    <div>

                        <ul className={styles.link_list}>
                            <li><Link href={"/cart"}><SVG.CartFill /> CART (0)</Link></li>{/* VISIBLE WHEN LOGGED IN */}
                            <li><Link href={"/user"}><SVG.PersonFill /> LOGIN</Link></li>
                        </ul>

                    </div>

                </div>
                <div className={styles.bcg_color}>

                    <div className={`${styles.max_width} ${styles.nav_form_container}`}>

                        <div id={styles.nav_list_container}>

                            <button
                                hidden={windowWidth > 720}
                                onClick={() => setExpandMenu()}
                                aria-expanded={menuVisible}
                                aria-controls={"nav_links_container"}
                                aria-label={menuVisible ? 'Close Menu' : 'Open Menu'}
                            >
                                <SVG.List />
                            </button>

                            <ul
                                hidden={(windowWidth >= 720 ? false : true) && !menuVisible}
                                id={`nav_links_container`}
                                className={`${styles.nav_links_container}`}
                                data-hidden={(windowWidth > 720 ? false : true) && !menuVisible}
                            >
                                <li><Link href={"/"}>HOME</Link></li>
                                <li> <Link href={"/catalog"}>CATALOG</Link></li>
                                <li><Link href={"/contact"}>CONTACT US</Link></li>
                                <li><Link href={"/terms"}>TERMS</Link></li>
                            </ul>
                        </div>

                        <div id={styles.form_container}>
                            <form role='search' onSubmit={(e) => handleSearchForm(e)}>
                                <label>
                                    <input type='text' name='search' placeholder='Running Shoes' ></input>
                                </label>
                                <button type='submit'><SVG.Search /></button>
                            </form>
                        </div>

                    </div>
                </div>
            </nav>

        </header >
    )
}

export default Header