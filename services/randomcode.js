/* eslint-disable prettier/prettier */
const randomCodeModel = require("../models/codemodels");
const {customAlphabet} = require("nanoid");

const nanoid = customAlphabet("1234567890", 8);

const codeData = (links) => {
  let data = [];

  links.map(async (item) => {
    const isExit = await randomCodeModel.findOne({
      link: item.link,
    });
    if (isExit) {
      data.push({link: item.link, code: isExit.code});
    } else {
      const newCode = nanoid();
      const newLink = new randomCodeModel({
        link: item.link,
        code: newCode,
      });
      await newLink.save();

      data.push({link: newLink.link, code: newLink.code});
    }
  });

  return data;
};

module.exports = {codeData};

// links.map((item) => {
//   randomCodeModel
//     .findOne({ link: item.link })
//     .exec()
//     .then((data1) => {
//       if (data1) {
//         data.push({ link: data1.link, code: data1.code });
//       } else {
//         const newCode = nanoid();
//         const newLink = new randomCodeModel({
//           link: item.link,
//           code: newCode,
//         });
//         // await randomCodeModel.create(newLink).exec();
//         newLink.save();

//         data.push({ link: newLink.link, code: newLink.code });
//       }

//       return data1;
//       // console.log(data1);
//     })
//     .catch((err) => console.error(err));
// });
