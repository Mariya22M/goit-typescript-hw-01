interface PageDetails {
  createAt: Date;
  updateAt: Date;
}

interface Page {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: PageDetails;
}

const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
};

const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};

// Використання змінної page2
console.log(page2.title); // Виведе 'Python or Js'
console.log(page2.likes); // Виведе 5
console.log(page2.details?.createAt); 

// Виведення всіх даних сторінки
const displayPageInfo = (page: Page) => {
  console.log(`Title: ${page.title}`);
  console.log(`Likes: ${page.likes}`);
  console.log(`Status: ${page.status}`);
  if (page.details) {
    console.log(`Created At: ${page.details.createAt}`);
    console.log(`Updated At: ${page.details.updateAt}`);
  }
};

// Викликаємо функцію для page1 та page2
displayPageInfo(page1);
displayPageInfo(page2); 
