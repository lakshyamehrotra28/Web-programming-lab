import os

base_dir = r"C:\Users\laksh\Desktop\CLG work\web"
q13_dir = os.path.join(base_dir, "q13")
os.makedirs(q13_dir, exist_ok=True)

states_info = [
    {
        'file': 'andhra_pradesh.html',
        'name': 'Andhra Pradesh',
        'projects': [
            ('Polavaram Irrigation Project', 'A major multi-purpose irrigation project on the Godavari River.')
        ],
        'developments': 'Amaravati capital city development, construction of new sea ports and IT parks in Visakhapatnam.',
        'importance': 'Major agricultural state, fast-growing IT and pharmaceutical hub with a long coastline.',
        'tourist_attractions': [
            ('Tirupati Balaji Temple', 'One of the richest and most visited religious sites in the world.'),
            ('Araku Valley', 'A beautiful hill station known for its coffee plantations and scenic views.')
        ]
    },
    {
        'file': 'arunachal_pradesh.html',
        'name': 'Arunachal Pradesh',
        'projects': [
            ('Sela Tunnel', 'Ensures all-weather connectivity to the border areas.')
        ],
        'developments': 'Major border road infrastructure enhancements and new hydroelectric power plants.',
        'importance': 'Strategic border location, incredibly rich in biodiversity and forests.',
        'tourist_attractions': [
            ('Tawang Monastery', 'The largest monastery in India and second largest in the world.'),
            ('Ziro Valley', 'Known for its stunning pine landscapes and the indigenous Apatani tribe.')
        ]
    },
    {
        'file': 'assam.html',
        'name': 'Assam',
        'projects': [
            ('Brahmaputra Riverfront Development', 'Beautification and development of the riverfront in Guwahati.')
        ],
        'developments': 'Upgradation of oil refineries, new medical colleges, and infrastructure expansion across the state.',
        'importance': 'Gateway to the North East, vital for tea production, crude oil, and biodiversity.',
        'tourist_attractions': [
            ('Kaziranga National Park', 'Famous for the one-horned rhinoceros and rich wildlife.'),
            ('Kamakhya Temple', 'A major Hindu pilgrimage site located on the Nilachal Hill in Guwahati.')
        ]
    },
    {
        'file': 'bihar.html',
        'name': 'Bihar',
        'projects': [
            ('Patna Metro', 'Ongoing metro rail project to ease traffic in the capital city.')
        ],
        'developments': 'Construction of new expressways, bridges over the Ganges, and massive rural road connectivity projects.',
        'importance': 'Rich historical and cultural heritage, significant contributor to human resources.',
        'tourist_attractions': [
            ('Bodh Gaya', 'The place where Gautama Buddha is said to have obtained Enlightenment.'),
            ('Nalanda University Ruins', 'A renowned ancient center of learning dating back to the 5th century.')
        ]
    },
    {
        'file': 'chhattisgarh.html',
        'name': 'Chhattisgarh',
        'projects': [
            ('Nava Raipur Development', 'Greenfield smart city project serving as the new state capital.')
        ],
        'developments': 'Expansion of steel plants, mining infrastructure, and tribal welfare schemes.',
        'importance': 'One of the most mineral-rich states in India, producing significant amounts of coal and steel.',
        'tourist_attractions': [
            ('Chitrakote Falls', 'Often called the Niagara Falls of India, located on the Indravati River.'),
            ('Bastar', 'Known for its unique tribal culture, artifacts, and dense forests.')
        ]
    },
    {
        'file': 'goa.html',
        'name': 'Goa',
        'projects': [
            ('Mopa International Airport', 'A newly built greenfield airport serving to boost tourism and cargo.')
        ],
        'developments': 'Highway expansions, coastal road development, and promotion of IT ecosystem.',
        'importance': 'Major tourism hub of India, coastal significance, and high per capita income.',
        'tourist_attractions': [
            ('Baga Beach', 'Famous for its stunning sunsets, beach shacks, and water sports.'),
            ('Basilica of Bom Jesus', 'A UNESCO World Heritage site holding the mortal remains of St. Francis Xavier.')
        ]
    },
    {
        'file': 'gujarat.html',
        'name': 'Gujarat',
        'projects': [
            ('GIFT City', 'India\'s first operational smart city and international financial services center.')
        ],
        'developments': 'Bullet train corridor (Ahmedabad to Mumbai), renewable energy parks, and port modernizations.',
        'importance': 'Highly industrialized state, leader in exports, diamond cutting, and petroleum refining.',
        'tourist_attractions': [
            ('Statue of Unity', 'The world\'s tallest statue, dedicated to Sardar Vallabhbhai Patel.'),
            ('Gir National Park', 'The sole home of the Asiatic lion in the wilderness.')
        ]
    },
    {
        'file': 'haryana.html',
        'name': 'Haryana',
        'projects': [
            ('Global City Gurugram', 'A massive urban development project aiming to be a central business district.')
        ],
        'developments': 'Industrial corridors, aerospace parks, and extensive highway networks.',
        'importance': 'Major automobile manufacturing hub, IT center, and agricultural powerhouse.',
        'tourist_attractions': [
            ('Kurukshetra', 'A historical city known as the setting of the epic Mahabharata.'),
            ('Sultanpur National Park', 'A popular bird sanctuary attracting migratory birds.')
        ]
    },
    {
        'file': 'himachal_pradesh.html',
        'name': 'Himachal Pradesh',
        'projects': [
            ('Rohtang Atal Tunnel', 'A highway tunnel providing all-weather connectivity to Lahaul and Spiti.')
        ],
        'developments': 'Four-laning of national highways, development of new hydro power projects.',
        'importance': 'Key producer of hydroelectric power, significant tourism economy, and horticulture.',
        'tourist_attractions': [
            ('Manali', 'A high-altitude Himalayan resort town famous for backpacking and honeymooning.'),
            ('Shimla', 'The former summer capital of British India, known for its colonial architecture.')
        ]
    },
    {
        'file': 'jharkhand.html',
        'name': 'Jharkhand',
        'projects': [
            ('Patratu Super Thermal Power Project', 'A major initiative to boost base-load power generation.')
        ],
        'developments': 'Development of industrial parks, improvement of mining infrastructure, and rural electrification.',
        'importance': 'Accounts for a vast proportion of India\'s mineral resources, particularly coal, iron ore, and mica.',
        'tourist_attractions': [
            ('Deoghar', 'A major Hindu pilgrimage center home to the Baidyanath Jyotirlinga temple.'),
            ('Hundru Falls', 'One of the most famous tourist places in Ranchi, created by the course of the Subarnarekha River.')
        ]
    }
]

html_template = """<!DOCTYPE html>
<html>

<head>
    <title>{name} - State Information</title>
</head>

<body>

    <h1>{name}</h1>

    <h2>Major Projects</h2>
{projects_html}

    <h2>Ongoing Developments</h2>
    <p>{developments}</p>

    <h2>Importance of the State</h2>
    <p>{importance}</p>

    <h2>Tourist Attractions</h2>
{tourist_html}

</body>

</html>"""

for state in states_info:
    projects_html = ""
    for proj_name, proj_desc in state["projects"]:
        img_name = proj_name.lower().replace(" ", "_").replace("'", "") + ".jpg"
        projects_html += f'    <img src="../{img_name}" width="300">\n'
        projects_html += f'    <p><b>{proj_name}</b> - {proj_desc}</p>\n\n'

    tourist_html = ""
    for attr_name, attr_desc in state["tourist_attractions"]:
        img_name = attr_name.lower().replace(" ", "_").replace("'", "") + ".jpg"
        tourist_html += f'    <img src="../{img_name}" width="300">\n'
        tourist_html += f'    <p><b>{attr_name}</b> - {attr_desc}</p>\n\n'
        tourist_html += "    <br>\n\n"

    content = html_template.format(
        name=state["name"],
        projects_html=projects_html.rstrip(),
        developments=state["developments"],
        importance=state["importance"],
        tourist_html=tourist_html.rstrip()
    )

    file_path = os.path.join(q13_dir, state["file"])
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

with open(os.path.join(q13_dir, 'download_images.ps1'), 'w') as f:
    ps_cmd = "$images = @{\n"
    for state in states_info:
        for proj_name, _ in state['projects']:
            img_name = proj_name.lower().replace(' ', '_').replace('\'', '') + '.jpg'
            ps_cmd += f"    '{img_name}' = '{proj_name}'\n"
        for attr_name, _ in state['tourist_attractions']:
            img_name = attr_name.lower().replace(' ', '_').replace('\'', '') + '.jpg'
            ps_cmd += f"    '{img_name}' = '{attr_name}'\n"
    ps_cmd += "}\n\n"
    ps_cmd += """foreach ($img in $images.GetEnumerator()) {
    $safeName = [uri]::EscapeDataString($img.Value)
    $url = "https://ui-avatars.com/api/?name=$safeName&background=random&color=fff&size=300"
    $path = "C:\\Users\\laksh\\Desktop\\CLG work\\web\\$($img.Name)"
    if (-not (Test-Path $path)) {
        Invoke-WebRequest -Uri $url -OutFile $path
    }
}
"""
    f.write(ps_cmd)

print("Files created successfully.")
