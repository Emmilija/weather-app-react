function Footer() {
    const currentDate = new Date();
    const footerDate = currentDate.getDate();
    const footerMonth = currentDate.getMonth() + 1;
    const footerYear = currentDate.getFullYear()

return(
    <footer className="footer">
<div>
    {footerDate}/{footerMonth}/{footerYear}
</div>
    </footer>
)



}

export default Footer