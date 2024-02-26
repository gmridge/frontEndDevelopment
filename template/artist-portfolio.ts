
function addCard() {
  const template = (
    document.getElementById('portfolio-card-template') as HTMLTemplateElement
  )?.content.cloneNode(true) as Element | null;

  const cardTitle = template?.querySelector('.card-title');
  if (cardTitle) {
    cardTitle.innerHTML = 'My Card Title';
  }
  const cardList = template?.querySelector('.card-title');
  if (cardTitle) {
    cardTitle.innerHTML = 'Frida Kahlo';
  }
  // template?.querySelector('.card-title')?.innerText = 'My Card Title';
  // template.querySelector('.card-text').innerText = 'Frida Kahlo';

  if (template) {
    document.querySelector('#card-list')?.appendChild(template);
  }
}

const artist = {
  name: 'Frida Kahlo',
  birthYear: 1907,
  deathYear: 1954,
  nationality: 'Mexican',
  portfolio: [
      {
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPrwL0PkO_fpuegVpbWnXiiP4pKUEeEUsiQA&usqp=CAU',
        title: 'Frida Kahlo',
        text: 'Frida Kahlo was celebrated for her self-portraits, pain and passion and use of bold, vibrant colours. She fought polio as a child and is an icon for the disabled community. Her turbulent marriage with fellow artist Diego Rivera is also highly analyzed and seen throughout her work.',
      },
    {
      url: 'https://www.fridakahlo.org/images/paintings/the-broken-column.jpg',
      title: 'The Broken Column, 1944',
      text:'An expression of her anguish and suffering. Oil on masonite'
    },
    {
      url: 'https://www.fridakahlo.org/images/paintings/the-wounded-deer.jpg',
      title: 'The Wounded Deer, 1946',
      text:'A wedding gift to her friends Lina and Arcady Boitler. Oil on masonite'
    },
  ],
};




// Define the Model for the artist's data
class ArtistModel {
  // Initially has no artist data
  private data = null;
  name: ArtistModel | null | undefined | any;
  portfolio: ArtistModel | null | undefined | any;

  // TODO: Implement a method to set the artist's data
  setData(artistData?: any) {
    this.data = artistData;
    // This method should update the artist's data
  }

  // TODO: Implement a method to get the artist's data
  getData() {
    return this.data;
    // This method should return the artist's data
  }
}

// Define the View for the artist's portfolio
class ArtistView {
  private template: HTMLTemplateElement;

  constructor(templateId: string) {
    // Attempt to grab the template element
    this.template = document.getElementById(templateId) as HTMLTemplateElement;
  }

  // TODO: Implement a method to render the artist's data
  render(artistData?: ArtistModel) {
    // This method should render the artist's portfolio cards
    const portfolioContainer = document.getElementById('portfolio-container');
    const artistName = document.getElementById(
      'artist-name'
    ) as HTMLElement | null;

    if (artistName && artistData && artistData.name) {
      artistName.innerText = artistData.name;
    }

    if (portfolioContainer && artistData && artistData.portfolio) {
      portfolioContainer.innerHTML = '';

      artistData.portfolio.forEach((item) => {
        const clonedNode = this.template.content.cloneNode(true) as HTMLElement;

        const titleElement = clonedNode.querySelector(
          '.card-title'
        ) as HTMLElement | null;

        if (titleElement) {
          titleElement.innerText = item.title;
        }
        
        const textElement = clonedNode.querySelector(
          '.card-text'
        ) as HTMLElement | null;

        if (textElement) {
          textElement.innerText = item.text;
        }

        // Set the URL for the image
        const imgElement = clonedNode.querySelector(
          '.card-img'
        ) as HTMLElement | null;
        if (imgElement instanceof HTMLImageElement) {
          imgElement.src = item.url;
          imgElement.alt = item.title;
        }

        portfolioContainer.appendChild(clonedNode);
      });
    }
  }
}

// Define the Controller to glue the Model and View together
class ArtistController {
  private model: ArtistModel;
  private view: ArtistView | any;

  constructor(model: ArtistModel, view: ArtistView) {
    this.model = model;
    this.view = view;
  }

  // TODO: Implement a method to initialize the controller
  init() {
    this.updateView();
    // This method should set up event listeners and initial data
  }

  // TODO: Implement a method to update the view when data changes
  updateView() {
    // This method should trigger a re-render of the view with the current data
    const artistData = this.model.getData();
    this.view.render(artistData);
  }
}

// Check the interaction between model, view, and controller
// Initially, functionality is not fully implemented
const artistModel = new ArtistModel();
const artistView = new ArtistView('portfolio-card-template');
const artistController = new ArtistController(artistModel, artistView);

artistController.init();

artistModel.setData(null);
artistController.updateView();

artistModel.setData(artist);
artistController.updateView();
