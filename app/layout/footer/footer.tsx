import Link from 'next/link'
import React from 'react'
import styles from "./footer.module.css"
import * as SVG from "@/public/imgs/svg_converted"

function Footer() {
  return (
    <footer id={styles.container}>


      <div className={styles.links_container}>
        <div className={styles.list_container}>
          <h6>INFORMATION</h6>

          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/catalog">Catolog</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
          </ul>
        </div>

        <div className={styles.list_container}>
          <h6>CATEGORIES</h6>

          <ul>
            <li><Link href="/catalog?category=running-wear">Running Wear</Link></li>
            <li><Link href="/catalog?category=hiking-wear">Hiking Wear</Link></li>
            <li><Link href="/catalog?category=winter-wear">Winter Wear</Link></li>
            <li><Link href="/catalog?category=fishing-gear">Fishing Gear</Link></li>
            <li><Link href="/sale">Sale</Link></li>
          </ul>
        </div>

        <div className={`${styles.list_container} ${styles.social_media}`}>
          <h6>GET CONNECTED</h6>

          <p>Like, share, or follow for exclusive info!</p>

          <ul>
            <li><a href="#" target='_blank' rel='noreferrer'><SVG.Facebook/></a></li>
            <li><a href="#" target='_blank' rel='noreferrer'><SVG.Instagram /></a></li>
            <li><a href="#" target='_blank' rel='noreferrer'><SVG.Twitter /></a></li>
            <li><a href="#" target='_blank' rel='noreferrer'><SVG.Whatsapp /></a></li>
          </ul>
        </div>
      </div>

      <div className={styles.disclaimer}>

        <small>Website made for study only.</small>
        <small>
          Inspired By <a href='https://www.motocms.com/website-templates/demo/83888.html'>this design</a>
          {" "} published on {" "}
          <a href='https://www.motocms.com/website-templates/motocms-ecommerce-template/83888.html'>
            MOTOCMS
          </a>.
        </small>

      </div>

    </footer>
  )
}

export default Footer