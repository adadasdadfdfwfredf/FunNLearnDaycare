import React from "react";
import PhotoAlbum from "react-photo-album";

const imgUrls = [
  "https://lh3.googleusercontent.com/pw/AIL4fc8ITeBRhugFjnOxTIzZMa_yywvhEHWK7JFt6jm2jpw4gd6NBqoF8p_YV4C-nXytk-89HBaUPVjIoQUTtkRzZxrMyiQ3AHBRTpjGuqhBM3O2c83v_Go=w2400",
  "https://lh3.googleusercontent.com/pw/AIL4fc9xyUOh5WFoSkfL488anEymdnfnPUwAnlFO7hx1K9QWMmuuXj15QSkxN2WeH1oGvWIosuyanTzudUlGQRp1Lm7OmqY-PB9Fjp-XHlq5fwreqn0uWA=w2400",
  "https://lh3.googleusercontent.com/pw/AIL4fc_tb4FKquIvDlXrkhqdNHG1Gu_5fUj9i1U2fX6bbCGuQTcS-w67MTsgB0VIh2zXL9XU8RCSiXDitJ-Hv2sSBrHrR566sm6XJx-MJeD2DQDqb_5Qyw=w2400",
  "https://lh3.googleusercontent.com/pw/AIL4fc8c72UO3vZwuOtDGc-TXKLzMAFaw6M-jMMksRKa3LKZ-de_6TAItlpxv6UpI_lPHOXeBt0yjm6mNwDzVRvxf_WHgu7wYzeMJgJ0UgeJRXJaYTcY-Q=w2400",
  "https://lh3.googleusercontent.com/pw/AIL4fc9DcyQfuRcJ2ReD0rhtNfMwwt25NnxnEqUI03OSCg8a7fXCrfXbl-SUvh-GRpvNhCh_LYbIjRa1ZFdLbrJnCOwVL_NX5YyM5Jy2OCU8HhlufT9CIA=w2400",
  "https://lh3.googleusercontent.com/pw/AIL4fc_cmMkwAI4vIGyu7ooG8NcrCuVsf3KNqAD_GCEZWhwSTVGMZTYca42JlUrtldgK--ht94VwS7dYY_UlQxNEEm2uaF7EAD5YErcAeioe0SbqtN2acw=w2400",
  "https://lh3.googleusercontent.com/pw/AIL4fc97N2-qmRKN3VhdFwcnTxY4-0xybKwZ7lya3-xXtBkD36Qs1cEdYbuM5Bm_ZMuh_MSBYVoATTPWqI-T5T1rPDfTL9n9Cn1naksplGHvqSZI5ZNdpw=w2400",
  "https://lh3.googleusercontent.com/pw/AIL4fc8qReY6U2jaM-5QRxZJ-ZVaazkhaR6rEcyT3l70CjTiXW4Q50iIdGTDLjbD2akQW8EP6aF_AgFPjxrYBV9a_3uWReBHTA0xMP8CTM_JkGl8_PvvtA=w2400",
  "https://lh3.googleusercontent.com/pw/AIL4fc-YgRTDpsM_3ur0N5bgpirz0Ynt3qd35WDwhlUZN7z6f2TtX7FDY3dtF41L5STz19SXuA5szBc4JqKHD2_LutmTikw4UzkYSZLNH1RLIxrL0j7asw=w2400",
  "https://lh3.googleusercontent.com/pw/AIL4fc_TxjS8TSE4xPkB-VLI7FwzH5W-Tqn_eBym29oT1bdQ51eHUD078C7jF1EbWjrIAuF4UXJ61mkDKIzeOcAxb2Jw9WgXoRR8SHSOVjn3ZmZPAlLW9g=w2400",
  "https://www.funnlearndaycare.com/assets/images/P1010463.95215917_large.JPG",
  "https://www.funnlearndaycare.com/assets/images/P1010020.247141326_large.JPG",
];

class Pictures extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: null };
    this.closeModal = this.closeModal.bind(this);
    this.findNext = this.findNext.bind(this);
    this.findPrev = this.findPrev.bind(this);
    this.renderImageContent = this.renderImageContent.bind(this);
  }
  renderImageContent(src, index) {
    return (
      <div onClick={(e) => this.openModal(e, index)}>
        <img src={src} key={src} />
      </div>
    );
  }
  openModal(e, index) {
    this.setState({ currentIndex: index });
  }
  closeModal(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState({ currentIndex: null });
  }
  findPrev(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex - 1,
    }));
  }
  findNext(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
    }));
  }
  render() {
    return (
      <div className="wrapper-page">
        <div className="title">
        <div className='wrapperagain'>
          <div className='wrapper-with-bar'>
            <h1 className="titletest-text">View Our Gallery</h1>
            <hr className="service-bar-test" />
          </div>
        </div>

        <div className="gallery-grid">
          {imgUrls.map(this.renderImageContent)}
        </div>
        <GalleryModal
          closeModal={this.closeModal}
          findPrev={this.findPrev}
          findNext={this.findNext}
          hasPrev={this.state.currentIndex > 0}
          hasNext={this.state.currentIndex + 1 < imgUrls.length}
          src={imgUrls[this.state.currentIndex]}
        />
      </div>
      </div>
    );
  }
}

class GalleryModal extends React.Component {
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    document.body.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.body.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown(e) {
    if (e.keyCode === 27) this.props.closeModal();
    if (e.keyCode === 37 && this.props.hasPrev) this.props.findPrev();
    if (e.keyCode === 39 && this.props.hasNext) this.props.findNext();
  }
  render() {
    const { closeModal, hasNext, hasPrev, findNext, findPrev, src } = this.props;
    if (!src) {
      console.log("whut");
      return null;
    }
    return (
      <div>
        <div className="modal-overlay" onClick={closeModal}></div>
        <div isOpen={!!src} className="modal">
          <div className="modal-body">
            <a
              href="#"
              className="modal-close"
              onClick={closeModal}
              onKeyDown={this.handleKeyDown}
            >
              &times;
            </a>
            {hasPrev && (
              <a
                href="#"
                className="modal-prev"
                onClick={findPrev}
                onKeyDown={this.handleKeyDown}
              >
                &lsaquo;
              </a>
            )}
            {hasNext && (
              <a
                href="#"
                className="modal-next"
                onClick={findNext}
                onKeyDown={this.handleKeyDown}
              >
                &rsaquo;
              </a>
            )}
            <img src={src} />
          </div>
        </div>
      </div>
    );
  }
}

export default Pictures;
