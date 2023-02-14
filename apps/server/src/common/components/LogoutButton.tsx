import { AuthState, signOut } from '@packages/auth'
import { t } from '@packages/i18n'
import { DoorIcon } from '@packages/icons/src/DoorIcon'
import styles from './LogoutButton.module.scss'

export interface LogoutButtonProps {
  authState: AuthState
}

export const LogoutButton = ({ authState }: LogoutButtonProps) => (
  <>
    <div class="dropdown">
      <button
        class={`btn btn-outline-light dropdown-toggle ${styles.dropdownButton}`}
        type="button"
        id="userMenu"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {authState.user && authState.user.image && (
          <img
            src={authState.user && authState.user.image}
            class={`rounded-full w-32 shadow-lg ${styles.userAvatar}`}
          />
        )}
      </button>
      <ul
        class={`dropdown-menu dropdown-menu-dark  ${styles.dropdownMenu}`}
        aria-labelledby="userMenu"
      >
        <li>
          <a
            class={`${styles.dropdownButton} ${styles.dropdownItem}`}
            onClick={() => signOut()}
            aria-label="Sign out"
          >
            <DoorIcon />
          </a>
        </li>
      </ul>
    </div>
  </>
)
