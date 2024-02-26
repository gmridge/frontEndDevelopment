import PortfolioItem from './portfolio-item'

const artist = {
  name: 'Frida Kahlo',
  portfolio: [
    {
      title: 'portrait',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPrwL0PkO_fpuegVpbWnXiiP4pKUEeEUsiQA&usqp=CAU',
    },
    {
      url: 'https://www.fridakahlo.org/images/paintings/the-broken-column.jpg',
      title: 'The Broken Column, 1944',
    },
  ],
}

// ... [rest of the ArtistModel and ArtistView code]
class ArtistModel {
  // Initially has no artist data
  private data: any = null;

  setData(artistData?: any) 
  {
    this.data = artistData
  }

  getData() {
    return this.data
  }
}

// Define the View for the artist's portfolio
class ArtistView {
    private container: HTMLElement | null;
  
    constructor(containerId: string) {
      // Attempt to grab the container element
      this.container = document.getElementById(containerId);
    };

  render(artistData: any) {
    // Use custom 'portfolio-item' elements instead of template
    if (this.container) {
      const artistName = document.getElementById(
        'artist-name'
      ) as HTMLElement | null

      if(artistName && artistData && artistData.name) {
        artistName.innerText = artistData.name
      }

      this.container.innerHTML = ''
      artistData?.portfolio.forEach((item) =>{
      const portfolioItem = document.createElement(
        'portfolio-item'
      ) as PortfolioItem

      portfolioItem.setData({
        title: item.title,
        url: item.url,
      })
      this.container?.appendChild(portfolioItem)
      });
      }else {
        console.error('container with id not found')
    }
  }; 
}
  
class ArtistController {
  private model: ArtistModel;
  private view: ArtistView;

  constructor(model: ArtistModel, view: ArtistView) {
    this.model = model;
    this.view = view;
  }

  //implement a method to initialize the controller
  init() {
    this.updateView()
  }

  updateView() {
    const artistData = this.model.getData()
    this.view.render(artistData)
  }
}

// create instances of model view and controller
const artistModel= new ArtistModel()
const artistView = new ArtistView('portfolio-container')
const artistController = new ArtistController(artistModel, artistView)

  // ... [rest of the ArtistController code]
  // Initialize the controller
  artistController.init();

  //Stimulate setting data and updating the view
  artistModel.setData(null) //set data to null (initial state)
  artistController.updateView() // should render an empty portfolio initially

  artistModel.setData(artist)
  artistController.updateView()// should render as an empty portfolio initially

  