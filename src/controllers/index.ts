import { Request, Response  } from 'express';

const Controller = {
  get: (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const data = {
      name: `Certificate #${id}`,
      description: "This is a Carbonable Certificate",
      image: 'https://carbonable.infura-ipfs.io/ipfs/QmcaBb1f4aaupLFwpKaSWVNFXBMdEfLvp5WSUhUgtJX899',
      external_url: "https://www.carbonable.io",
      youtube_url: "https://youtu.be/5dZrROBmfKU",
      attributes: [
        {
          display_type: null,
          trait_type: "Project developer",
          value: "Carbonable Fondation"
        },
        {
          display_type: null,
          trait_type: "Certifier",
          value: "ERS"
        },
        {
          display_type: null,
          trait_type: "Source",
          value: "Carbonable"
        },
        {
          display_type: "number",
          trait_type: "Retired quantity",
          value: 4
        },
      ]
    }
    res.json(data);
  }
};

export default Controller;