export default function getRandomStatus() {
  let status: any;
  const statusArr = ['active', 'inactive', 'pending', 'blacklisted'];

  const index = Math.round(Math.random() * 3);

  statusArr.forEach((stat, i) => {
    if (i === index) {
      status = stat;
    }
  });

  return status;
}
