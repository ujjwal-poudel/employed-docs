function LogomarkPaths() {
  return (
    //
    // logomark paths goes here
    <h1>Logo mark</h1>
  )
}

export function Logomark(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 36 36" fill="none" {...props}>
      <LogomarkPaths />
    </svg>
  )
}

export function Logo(props) {
  return (
    <h1 className="text-2xl text-white">Employed</h1>
    // <svg aria-hidden="true" viewBox="0 0 227 36" fill="none" {...props}>
    //   <LogomarkPaths />
    //   <path
    //     d="M36 0h36v36H36V0zM0 0h36v36H0V0z"
    //     fill="currentColor"
    //     mask="url(#a)"
    //   ></path>
    // </svg>
  )
}
