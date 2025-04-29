import Swal from "sweetalert2";

export function formatDateTime(createdAt) {
    const date = new Date(createdAt);

    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const hh = String(hours).padStart(2, '0');

    return `${dd}-${mm}-${yyyy}  ${hh}:${minutes} ${ampm}`;
}

export function formatDateToYYYYMMDD(dateInput) {
    const date = new Date(dateInput);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const day = String(date.getDate()).padStart(2, '0'); // Ensures 2 digits

    return `${year}-${month}-${day}`;
}


// =====> Instances of Toaster  <=========

export const showAlert = (message = "Something Went Wrong", icon = "error") => {
    const Toast = Swal.mixin({
        title: message,
        timer: 3000,
        icon: icon,
        position: "top-right",
        showConfirmButton: false,
        toast: true,
        timerProgressBar: true,
    });
    Toast.fire();
}