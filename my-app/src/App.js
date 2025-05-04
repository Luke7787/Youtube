import logo from './images/logo.png';
import menu from './images/menu.png';
import abc from './images/abc.jpg';
import animal from './images/animal.jpg';
import national from './images/national.jpeg';
import daily from './images/daily.jpg';
import eye from './images/eye.jpeg';
import anna from './images/anna.jpeg';
import big from './images/big.jpeg';
import './App.css';


function App() {
  return (

    //HomePage
    <div className="HomePage">

      {/* Left Nagavigation Bar*/}
      <aside className="LeftSideBar">

        {/* TopBar - allows menu button & logo to be side by side rather than top to bottom */}
        <div className="TopBar">
          <img src={menu} alt="Youtube Hamburger Menu" className = "YoutubeMenu"></img>
          <img src={logo} alt="YouTube Logo" className="YouTubeLogo" />
        </div>

        {/* Youtube's Home Icon SVG */}
        <button className="LeftSideBarButton">
          <svg
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            height="24" 
            viewBox="0 0 24 24" 
            width="24" 
            className="IconStyle" 
          >
            <path 
              clip-rule="evenodd" 
              d="M22.146 11.146a.5.5 0 01-.353.854H20v7.5a1.5 1.5 0 01-1.5 1.5H14v-8h-4v8H5.5A1.5 1.5 0 014 19.5V12H2.207a.5.5 0 01-.353-.854L12 1l10.146 10.146Z" 
              fill-rule="evenodd"
            />
          </svg>
          Home
        </button>

        {/* Youtube's Short Icon SVG */}
        <button className="LeftSideBarButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="IconStyle"
          >
            <path
              clipRule="evenodd"
              d="m7.61 15.719.392-.22v-2.24l-.534-.228-.942-.404c-.869-.372-1.4-1.15-1.446-1.974-.047-.823.39-1.642 1.203-2.097h.001L15.13 3.59c1.231-.689 2.785-.27 3.466.833.652 1.058.313 2.452-.879 3.118l-1.327.743-.388.217v2.243l.53.227.942.404c.869.372 1.4 1.15 1.446 1.974.047.823-.39 1.642-1.203 2.097l-.002.001-8.845 4.964-.001.001c-1.231.688-2.784.269-3.465-.834-.652-1.058-.313-2.451.879-3.118l1.327-.742Zm1.993 6.002c-1.905 1.066-4.356.46-5.475-1.355-1.057-1.713-.548-3.89 1.117-5.025a4.14 4.14 0 01.305-.189l1.327-.742-.942-.404a4.055 4.055 0 01-.709-.391c-.963-.666-1.578-1.718-1.644-2.877-.08-1.422.679-2.77 1.968-3.49l8.847-4.966c1.905-1.066 4.356-.46 5.475 1.355 1.057 1.713.548 3.89-1.117 5.025a4.074 4.074 0 01-.305.19l-1.327.742.942.403c.253.109.49.24.709.392.963.666 1.578 1.717 1.644 2.876.08 1.423-.679 2.77-1.968 3.491l-8.847 4.965ZM10 14.567a.25.25 0 00.374.217l4.45-2.567a.25.25 0 000-.433l-4.45-2.567a.25.25 0 00-.374.216v5.134Z"
              fillRule="evenodd"
            />
          </svg>
          Shorts
        </button>

        {/* Youtube's Subscriptions Icon SVG */}
        <button className="LeftSideBarButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="IconStyle"
          >
            <path clip-rule="evenodd" 
            d="M4 4.5A1.5 1.5 0 015.5 3h13A1.5 1.5 0 0120 4.5H4Zm16.5 3h-17v11h17v-11ZM3.5 6A1.5 1.5 0 002 7.5v11A1.5 1.5 0 003.5 20h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0020.5 6h-17Zm7.257 4.454a.5.5 0 00-.757.43v4.233a.5.5 0 00.757.429L15 13l-4.243-2.546Z" 
            fill-rule="evenodd"
            />
          </svg>
          Subscriptions
        </button>

        {/* YouTube's Music Icon SVG */}
        <button className="LeftSideBarButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="IconStyle"
          >
            <path clip-rule="evenodd" 
            d="M12 20.5c4.694 0 8.5-3.806 8.5-8.5S16.694 3.5 12 3.5 3.5 7.306 3.5 12s3.806 8.5 8.5 8.5Zm0 1.5c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-5c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5Zm0 1c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6Zm-1.243-8.546c-.333-.2-.757.04-.757.43v4.233c0 .389.424.629.757.429L15 12l-4.243-2.546Z" 
            fill-rule="evenodd"
            />
          </svg>
          YouTube Music
        </button>

        {/* Section Divider */}
        <hr className="Divider" />

        {/* YouTube's ">" Icon SVG */}
        <button className="LeftSideBarButton">
          <span className="YouText">You</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="IconStyle YouIcon"
          >
            <path clip-rule="evenodd" 
            d="M4.97 17.65 9.62 13.1 4.97 8.6l.71-.71L11.03 13.15l-5.35 5.35-.71-.7z"
            fill-rule="evenodd"
            />
          </svg>
        </button>

        {/* Youtube's History Icon*/}
        <button className="LeftSideBarButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="IconStyle"
          >
            <path clip-rule="evenodd" 
            d="M14.203 4.83c-1.74-.534-3.614-.418-5.274.327-1.354.608-2.49 1.6-3.273 2.843H8.25c.414 0 .75.336.75.75s-.336.75-.75.75H3V4.25c0-.414.336-.75.75-.75s.75.336.75.75v2.775c.935-1.41 2.254-2.536 3.815-3.236 1.992-.894 4.241-1.033 6.328-.392 2.088.641 3.87 2.02 5.017 3.878 1.146 1.858 1.578 4.07 1.215 6.223-.364 2.153-1.498 4.1-3.19 5.48-1.693 1.379-3.83 2.095-6.012 2.016-2.182-.08-4.26-.949-5.849-2.447-1.588-1.499-2.578-3.523-2.784-5.697-.039-.412.264-.778.676-.817.412-.04.778.263.818.675.171 1.812.996 3.499 2.32 4.748 1.323 1.248 3.055 1.973 4.874 2.04 1.818.065 3.598-.532 5.01-1.681 1.41-1.15 2.355-2.773 2.657-4.567.303-1.794-.056-3.637-1.012-5.186-.955-1.548-2.44-2.697-4.18-3.231ZM12.75 7.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75v4.886l.314.224 3.5 2.5c.337.241.806.163 1.046-.174.241-.337.163-.806-.174-1.046l-3.186-2.276V7.5Z" 
            fill-rule="evenodd"
            />
          </svg>
          History
        </button>

        {/* Youtube's Playlists Icon*/}
        <button className="LeftSideBarButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="IconStyle"
          >
            <path clip-rule="evenodd" 
            d="M3.75 5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75S20.664 5 20.25 5H3.75Zm0 4c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75S20.664 9 20.25 9H3.75Zm0 4c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-8.5Zm8.5 4c.414 0 .75.336.75.75s-.336.75-.75.75h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5Zm3.498-3.572c-.333-.191-.748.05-.748.434v6.276c0 .384.415.625.748.434L22 17l-6.252-3.572Z" 
            fill-rule="evenodd"
            />
          </svg>
          Playlists
        </button>

        {/* Youtube's Your videos Icon*/}
        <button className="LeftSideBarButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="IconStyle"
          >
            <path clip-rule="evenodd" 
            d="M3.5 5.5h17v13h-17v-13ZM2 5.5C2 4.672 2.672 4 3.5 4h17c.828 0 1.5.672 1.5 1.5v13c0 .828-.672 1.5-1.5 1.5h-17c-.828 0-1.5-.672-1.5-1.5v-13Zm7.748 2.927c-.333-.19-.748.05-.748.435v6.276c0 .384.415.625.748.434L16 12 9.748 8.427Z" 
            fill-rule="evenodd"
            />
          </svg>
          Your videos
        </button>

        {/* Youtube's Watch later Icon*/}
        <button className="LeftSideBarButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="IconStyle"
          >
            <path clip-rule="evenodd" 
            d="M20.5 12c0 4.694-3.806 8.5-8.5 8.5S3.5 16.694 3.5 12 7.306 3.5 12 3.5s8.5 3.806 8.5 8.5Zm1.5 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-9.25-5c0-.414-.336-.75-.75-.75s-.75.336-.75.75v5.375l.3.225 4 3c.331.248.802.181 1.05-.15.248-.331.181-.801-.15-1.05l-3.7-2.775V7Z" 
            fill-rule="evenodd"
            />
          </svg>
          Watch later
        </button>

        {/* Youtube's Liked videos later Icon*/}
        <button className="LeftSideBarButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="IconStyle"
          >
            <path clip-rule="evenodd" 
            d="M14.813 5.018 14.41 6.5 14 8h5.192c.826 0 1.609.376 2.125 1.022.711.888.794 2.125.209 3.101L21 13l.165.413c.519 1.296.324 2.769-.514 3.885l-.151.202v.5c0 1.657-1.343 3-3 3H5c-1.105 0-2-.895-2-2v-8c0-1.105.895-2 2-2h2v.282c0-.834.26-1.647.745-2.325L12 1l1.1.472c1.376.59 2.107 2.103 1.713 3.546ZM7 10.5H5c-.276 0-.5.224-.5.5v8c0 .276.224.5.5.5h2v-9Zm10.5 9h-9V9.282c0-.521.163-1.03.466-1.453l3.553-4.975c.682.298 1.043 1.051.847 1.77l-.813 2.981c-.123.451-.029.934.255 1.305.284.372.725.59 1.192.59h5.192c.37 0 .722.169.954.459.32.399.357.954.094 1.393l-.526.876c-.241.402-.28.894-.107 1.33l.165.412c.324.81.203 1.73-.32 2.428l-.152.202c-.195.26-.3.575-.3.9v.5c0 .828-.672 1.5-1.5 1.5Z" 
            fill-rule="evenodd"
            />
          </svg>
          Liked videos
        </button>

        {/* Youtube's Your clips videos later Icon*/}
        <button className="LeftSideBarButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="IconStyle"
          >
            <path clip-rule="evenodd" 
            d="m8.042 9.456-.716.08c-.732.08-1.486-.16-2.043-.718-.977-.976-.977-2.559 0-3.535.976-.977 2.559-.977 3.535 0 .558.557.798 1.312.717 2.044l-.079.715.51.51 10.13 10.13c-.97.643-2.291.537-3.146-.318l-4.951-4.951-1.061 1.06 4.951 4.952c1.442 1.442 3.712 1.553 5.282.331.13-.1.255-.212.375-.331l.707-.707-1.06-1.061L15.534 12l5.657-5.657 1.06-1.06-.706-.708c-.12-.12-.245-.23-.376-.331-1.569-1.222-3.839-1.111-5.281.331L13.06 7.404l1.061 1.06 2.829-2.828c.855-.855 2.175-.961 3.146-.318l-4.56 4.56 1.06 1.061L15.536 12l-4.51-4.51c.128-1.164-.254-2.375-1.147-3.268-1.562-1.562-4.095-1.562-5.657 0-1.562 1.562-1.562 4.095 0 5.657.893.893 2.104 1.276 3.269 1.147l2.033 2.033 1.06-1.06-2.033-2.033-.509-.51Zm-.285-3.113c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.024 0 1.415.39.39 1.024.39 1.414 0 .39-.391.39-1.024 0-1.415Zm-.43 8.122.715.079.51-.51.973-.973L8.465 12l-.975.974c-1.165-.128-2.375.254-3.268 1.147-1.562 1.562-1.562 4.095 0 5.657 1.562 1.562 4.094 1.562 5.657 0 .893-.893 1.275-2.104 1.147-3.269l.974-.973-1.06-1.061-.975.974-.509.509.079.716c.08.732-.16 1.486-.717 2.044-.976.976-2.56.976-3.536 0-.976-.977-.976-2.56 0-3.536.558-.558 1.312-.798 2.044-.717Zm-.984 3.192c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414Z" 
            fill-rule="evenodd"
            />
          </svg>
          Your clips
        </button>

        {/* Section Divider */}
        <hr className="Divider2" />

        <h2 class = "subscription_section">Subscriptions</h2>

        {/* ABC New's */}
        <button className="LeftSideBarButton">
          <img src={abc} alt="ABC News" className="SubscriptionIcon" />
          <span className="SubscriptionText">ABC News</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="IconStyle Subscription"
          >
            <path clip-rule="evenodd" 
            d="M9 8c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm1.11 2.13.71.71C11.55 10.11 12 9.11 12 8c0-1.11-.45-2.11-1.18-2.84l-.71.71c.55.55.89 1.3.89 2.13 0 .83-.34 1.58-.89 2.13Zm-4.93.71.71-.71C5.34 9.58 5 8.83 5 8c0-.83.34-1.58.89-2.13l-.71-.71C4.45 5.89 4 6.89 4 8c0 1.11.45 2.11 1.18 2.84Zm7.05 1.41.71.71C14.21 11.69 15 9.94 15 8s-.79-3.69-2.06-4.96l-.71.71C13.32 4.84 14 6.34 14 8c0 1.66-.68 3.16-1.77 4.25Zm-9.17.71.71-.71C2.68 11.16 2 9.66 2 8c0-1.66.68-3.16 1.77-4.25l-.71-.71C1.79 4.31 1 6.06 1 8s.79 3.69 2.06 4.96Z"
            fill-rule="evenodd"
            />
          </svg>

        </button>

        {/* Animal Planet */}
        <button className="LeftSideBarButton">
          <img src={animal} alt="Animal Planet" className="SubscriptionIcon" />
          <span className="SubscriptionText">Animal Planet</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="IconStyle Subscription"
          >
            <path clip-rule="evenodd" 
            d="M9 8c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm1.11 2.13.71.71C11.55 10.11 12 9.11 12 8c0-1.11-.45-2.11-1.18-2.84l-.71.71c.55.55.89 1.3.89 2.13 0 .83-.34 1.58-.89 2.13Zm-4.93.71.71-.71C5.34 9.58 5 8.83 5 8c0-.83.34-1.58.89-2.13l-.71-.71C4.45 5.89 4 6.89 4 8c0 1.11.45 2.11 1.18 2.84Zm7.05 1.41.71.71C14.21 11.69 15 9.94 15 8s-.79-3.69-2.06-4.96l-.71.71C13.32 4.84 14 6.34 14 8c0 1.66-.68 3.16-1.77 4.25Zm-9.17.71.71-.71C2.68 11.16 2 9.66 2 8c0-1.66.68-3.16 1.77-4.25l-.71-.71C1.79 4.31 1 6.06 1 8s.79 3.69 2.06 4.96Z"
            fill-rule="evenodd"
            />
          </svg>

        </button>

        {/* anna solves */}
        <button className="LeftSideBarButton">
          <img src={anna} alt="anna solves" className="SubscriptionIcon" />
          <span className="SubscriptionText">anna solves</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="Subscription"
          >
            <path clip-rule="evenodd" 
            d="M9 8c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm1.11 2.13.71.71C11.55 10.11 12 9.11 12 8c0-1.11-.45-2.11-1.18-2.84l-.71.71c.55.55.89 1.3.89 2.13 0 .83-.34 1.58-.89 2.13Zm-4.93.71.71-.71C5.34 9.58 5 8.83 5 8c0-.83.34-1.58.89-2.13l-.71-.71C4.45 5.89 4 6.89 4 8c0 1.11.45 2.11 1.18 2.84Zm7.05 1.41.71.71C14.21 11.69 15 9.94 15 8s-.79-3.69-2.06-4.96l-.71.71C13.32 4.84 14 6.34 14 8c0 1.66-.68 3.16-1.77 4.25Zm-9.17.71.71-.71C2.68 11.16 2 9.66 2 8c0-1.66.68-3.16 1.77-4.25l-.71-.71C1.79 4.31 1 6.06 1 8s.79 3.69 2.06 4.96Z"
            fill-rule="evenodd"
            />
          </svg>

        </button>

        {/* BigMarvel The Simulator */}
        <button className="LeftSideBarButton">
          <img src={big} alt="BigMarvel The Simulator" className="SubscriptionIcon" />
          <span className="SubscriptionText">BigMarvel The Simulator</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="Subscription"
          >
            <path clip-rule="evenodd" 
            d="M9 8c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm1.11 2.13.71.71C11.55 10.11 12 9.11 12 8c0-1.11-.45-2.11-1.18-2.84l-.71.71c.55.55.89 1.3.89 2.13 0 .83-.34 1.58-.89 2.13Zm-4.93.71.71-.71C5.34 9.58 5 8.83 5 8c0-.83.34-1.58.89-2.13l-.71-.71C4.45 5.89 4 6.89 4 8c0 1.11.45 2.11 1.18 2.84Zm7.05 1.41.71.71C14.21 11.69 15 9.94 15 8s-.79-3.69-2.06-4.96l-.71.71C13.32 4.84 14 6.34 14 8c0 1.66-.68 3.16-1.77 4.25Zm-9.17.71.71-.71C2.68 11.16 2 9.66 2 8c0-1.66.68-3.16 1.77-4.25l-.71-.71C1.79 4.31 1 6.06 1 8s.79 3.69 2.06 4.96Z"
            fill-rule="evenodd"
            />
          </svg>

        </button>

        {/* Daily Dose Of Internet */}
        <button className="LeftSideBarButton">
          <img src={daily} alt="Daily Dose Of Internet" className="SubscriptionIcon" />
          <span className="SubscriptionText">Daily Dose Of Internet</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="Subscription"
          >
            <path clip-rule="evenodd" 
            d="M9 8c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm1.11 2.13.71.71C11.55 10.11 12 9.11 12 8c0-1.11-.45-2.11-1.18-2.84l-.71.71c.55.55.89 1.3.89 2.13 0 .83-.34 1.58-.89 2.13Zm-4.93.71.71-.71C5.34 9.58 5 8.83 5 8c0-.83.34-1.58.89-2.13l-.71-.71C4.45 5.89 4 6.89 4 8c0 1.11.45 2.11 1.18 2.84Zm7.05 1.41.71.71C14.21 11.69 15 9.94 15 8s-.79-3.69-2.06-4.96l-.71.71C13.32 4.84 14 6.34 14 8c0 1.66-.68 3.16-1.77 4.25Zm-9.17.71.71-.71C2.68 11.16 2 9.66 2 8c0-1.66.68-3.16 1.77-4.25l-.71-.71C1.79 4.31 1 6.06 1 8s.79 3.69 2.06 4.96Z"
            fill-rule="evenodd"
            />
          </svg>

        </button>

        {/* jacksepticeye */}
        <button className="LeftSideBarButton">
          <img src={eye} alt="jacksepticeye" className="SubscriptionIcon" />
          <span className="SubscriptionText">jacksepticeye</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="Subscription"
          >
            <path clip-rule="evenodd" 
            d="M9 8c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm1.11 2.13.71.71C11.55 10.11 12 9.11 12 8c0-1.11-.45-2.11-1.18-2.84l-.71.71c.55.55.89 1.3.89 2.13 0 .83-.34 1.58-.89 2.13Zm-4.93.71.71-.71C5.34 9.58 5 8.83 5 8c0-.83.34-1.58.89-2.13l-.71-.71C4.45 5.89 4 6.89 4 8c0 1.11.45 2.11 1.18 2.84Zm7.05 1.41.71.71C14.21 11.69 15 9.94 15 8s-.79-3.69-2.06-4.96l-.71.71C13.32 4.84 14 6.34 14 8c0 1.66-.68 3.16-1.77 4.25Zm-9.17.71.71-.71C2.68 11.16 2 9.66 2 8c0-1.66.68-3.16 1.77-4.25l-.71-.71C1.79 4.31 1 6.06 1 8s.79 3.69 2.06 4.96Z"
            fill-rule="evenodd"
            />
          </svg>

        </button>

        {/* National Geographic */}
        <button className="LeftSideBarButton">
          <img src={national} alt="National Geographic" className="SubscriptionIcon" />
          <span className="SubscriptionText">National Geographic</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="Subscription"
          >
            <path clip-rule="evenodd" 
            d="M9 8c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm1.11 2.13.71.71C11.55 10.11 12 9.11 12 8c0-1.11-.45-2.11-1.18-2.84l-.71.71c.55.55.89 1.3.89 2.13 0 .83-.34 1.58-.89 2.13Zm-4.93.71.71-.71C5.34 9.58 5 8.83 5 8c0-.83.34-1.58.89-2.13l-.71-.71C4.45 5.89 4 6.89 4 8c0 1.11.45 2.11 1.18 2.84Zm7.05 1.41.71.71C14.21 11.69 15 9.94 15 8s-.79-3.69-2.06-4.96l-.71.71C13.32 4.84 14 6.34 14 8c0 1.66-.68 3.16-1.77 4.25Zm-9.17.71.71-.71C2.68 11.16 2 9.66 2 8c0-1.66.68-3.16 1.77-4.25l-.71-.71C1.79 4.31 1 6.06 1 8s.79 3.69 2.06 4.96Z"
            fill-rule="evenodd"
            />
          </svg>

        </button>

        {/* Show more Section */}
        <button className="LeftSideBarButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="IconStyle"
          >
            <path clip-rule="evenodd" 
            d="M5.47 8.47c.293-.293.767-.293 1.06 0L12 13.94l5.47-5.47c.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06l-6 6-.53.53-.53-.53-6-6c-.293-.293-.293-.767 0-1.06Z"
            fill-rule="evenodd"
            />
          </svg>
          Show more
        </button>

      </aside>
    </div>
  );
}

export default App;
