import Link from "next/link";
import { Dropdown } from "react-bootstrap";

interface AuthProps {
  isLogin?: boolean;
}


export default function Auth(props: Partial<AuthProps>) {
  const { isLogin } = props;

  if (!isLogin) {
    return (
      <>
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-basic"
            className="bg-none dropdown ms-lg-40 dropdown-toggle">
            <img
              src="/img/avatar-1.png"
              className="rounded-circle"
              width="40"
              height="40"
              alt=""
            />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <li>
              <Link
                className="dropdown-item text-lg color-palette-2"
                href="/member">
                My Profile
              </Link>
            </li>
            <li>
              <Link className="dropdown-item text-lg color-palette-2" href="#">
                Wallet
              </Link>
            </li>
            <li>
              <Link className="dropdown-item text-lg color-palette-2" href="/edit=profile">
                Account Settings
              </Link>
            </li>
            <li>
              <Link className="dropdown-item text-lg color-palette-2" href="/sign-in">
                Log Out
              </Link>
            </li>
          </Dropdown.Menu>
        </Dropdown>
      </>
    );
  }
  return (
    <>
      <li className="nav-item my-auto">
        <Link
          href="/sign-in"
          className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
          role="button">
          Sign In
        </Link>
      </li>
    </>
  );
}
