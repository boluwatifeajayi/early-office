const Cr = () => {
  return (
    <div>
      <div className="carousel-wrapper">
        <div className="cw-container">
          <div>
            <span className="caption">
              <h1 className="caption-c1">
                <span>
                  Find the perfect <i>Freelance</i>
                  <br />
                  Services for your business
                </span>
              </h1>
            </span>

            <form className="search-bar search">
              <span className="search-bar-icon search">
                <svg
                  className="search-bar-svg"
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ fill: "#95979D" }}
                >
                  <path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z"></path>
                </svg>
                <input
                  type="search"
                  className="search-input search"
                  placeholder={`Try "building mobile app"`}
                />
                <button className="search-btn search">Search</button>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cr;
