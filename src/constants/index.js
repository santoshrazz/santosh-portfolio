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
