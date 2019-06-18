document.addEventListener("DOMContentLoaded", function () {
    let schedule = document.querySelector('#schedule table');
    let add_schedule = document.querySelector('#schedule_plus')

    add_schedule.onclick = function () {
        console.log(schedule);
        schedule.insertAdjacentHTML('beforeend',
            "<tr num>" +
                "<td class='first'>" +
                    "<textarea name='' id='' rows='1' class='time font font--bold'" +
                        "placeholder='Thời gian'></textarea>" +
                " </td>" +
                "<td class='second'>" +
                    "<textarea name='' id='' cols='30' rows='2' class='font font--bold font--space' " +
                        "placeholder='Tiêu đề'></textarea>" +
                    "<textarea name='' id='' cols='30' rows='5' class='font' " +
                        "placeholder='Chi tiết hoạt động'></textarea>" +
                "</td>" +
            "</tr>"
        )
    }

    let policy = document.querySelector('#policy table');
    let add_policy = document.querySelector('#policy_plus');

    add_policy.onclick = function () {
        policy.insertAdjacentHTML('beforeend',
            "<tr>"+
                "<td style='border: none'>"+
                    "<textarea name='' id='' cols='100' rows='1' class='font'"+
                        "placeholder='...'></textarea>"+
                "</td>"+
            "</tr>"
        )
    }

})