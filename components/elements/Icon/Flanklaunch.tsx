import { SVGProps } from 'react'

export function FlankLaunch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M.04 28.782a243.36 243.36 0 013.592-10.999c-.41-.122-.785-.234-1.09-.327a.939.939 0 01-.557-1.343c1.296-2.478 4.845-8.952 8.349-12.562.058-.064.117-.147.175-.205a11.416 11.416 0 1116.147 16.142c-.059.059-.141.117-.205.176-3.61 3.51-10.077 7.055-12.561 8.35a.94.94 0 01-1.342-.557c-.093-.299-.205-.68-.328-1.09A240.177 240.177 0 011.224 29.96.947.947 0 01.04 28.782zM11.254 11.25a7.499 7.499 0 1014.997-.002 7.499 7.499 0 00-14.997.002zm7.498 1.875a1.875 1.875 0 113.751.001 1.875 1.875 0 01-3.75 0zm-1.874-4.687a.938.938 0 111.876 0 .938.938 0 01-1.876 0z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" transform="rotate(180 15 15)" d="M0 0h30v30H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
