function Show(key,text,color,duration)
    SendNUIMessage({
        action = "show",
        key = key,
        text = text,
        color = color
    })
    Citizen.Wait(duration)
    Hide()
end

function Hide()
    SendNUIMessage({
        action = "hide"
    })
end

RegisterCommand("test", function()
    Show("E", "Intra pe server-ul nostru de discord daca vrei sa fi smecher", "blue", 5000)
end)