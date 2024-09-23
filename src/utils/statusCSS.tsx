export const statusCSS = (status: string) => {
  switch (status) {
    case "Pending":
      return "bg-gray-200 text-gray-800";
    case "Confirmed":
      return "bg-blue-200 text-blue-800";
    case "Shipping":
      return "bg-yellow-200 text-yellow-800";
    case "Delivered":
      return "bg-green-200 text-green-800";
    case "Cancelled":
      return "bg-red-200 text-red-800";
    default:
      return "bg-gray-100 text-gray-600";
  }
};
