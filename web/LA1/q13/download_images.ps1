$images = @{
    'polavaram_irrigation_project.jpg' = 'Polavaram Irrigation Project'
    'tirupati_balaji_temple.jpg' = 'Tirupati Balaji Temple'
    'araku_valley.jpg' = 'Araku Valley'
    'sela_tunnel.jpg' = 'Sela Tunnel'
    'tawang_monastery.jpg' = 'Tawang Monastery'
    'ziro_valley.jpg' = 'Ziro Valley'
    'brahmaputra_riverfront_development.jpg' = 'Brahmaputra Riverfront Development'
    'kaziranga_national_park.jpg' = 'Kaziranga National Park'
    'kamakhya_temple.jpg' = 'Kamakhya Temple'
    'patna_metro.jpg' = 'Patna Metro'
    'bodh_gaya.jpg' = 'Bodh Gaya'
    'nalanda_university_ruins.jpg' = 'Nalanda University Ruins'
    'nava_raipur_development.jpg' = 'Nava Raipur Development'
    'chitrakote_falls.jpg' = 'Chitrakote Falls'
    'bastar.jpg' = 'Bastar'
    'mopa_international_airport.jpg' = 'Mopa International Airport'
    'baga_beach.jpg' = 'Baga Beach'
    'basilica_of_bom_jesus.jpg' = 'Basilica of Bom Jesus'
    'gift_city.jpg' = 'GIFT City'
    'statue_of_unity.jpg' = 'Statue of Unity'
    'gir_national_park.jpg' = 'Gir National Park'
    'global_city_gurugram.jpg' = 'Global City Gurugram'
    'kurukshetra.jpg' = 'Kurukshetra'
    'sultanpur_national_park.jpg' = 'Sultanpur National Park'
    'rohtang_atal_tunnel.jpg' = 'Rohtang Atal Tunnel'
    'manali.jpg' = 'Manali'
    'shimla.jpg' = 'Shimla'
    'patratu_super_thermal_power_project.jpg' = 'Patratu Super Thermal Power Project'
    'deoghar.jpg' = 'Deoghar'
    'hundru_falls.jpg' = 'Hundru Falls'
}

foreach ($img in $images.GetEnumerator()) {
    $safeName = [uri]::EscapeDataString($img.Value)
    $url = "https://ui-avatars.com/api/?name=$safeName&background=random&color=fff&size=300"
    $path = "C:\Users\laksh\Desktop\CLG work\web\$($img.Name)"
    if (-not (Test-Path $path)) {
        Invoke-WebRequest -Uri $url -OutFile $path
    }
}
