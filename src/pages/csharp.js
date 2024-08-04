import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import Header from '../components/Header';
import { FaCode, FaLaptopCode, FaChartLine, FaHandsHelping, FaChalkboardTeacher } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './csharp.css';
import { Link } from 'react-router-dom';
import ReadOnlyCodeSnippet from '../components/ReadOnlyCodeSnippet';

const CsharpPage = () => {
    const whyUlearnTechRef = useRef(null);
    const courseOverviewRef = useRef(null);
    const reasonItemsRef = useRef([]);
    const projectsRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        };
        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const courseOverviewElement = courseOverviewRef.current;
        const reasonItemsElements = reasonItemsRef.current;
        const projectsElement = projectsRef.current;
        const whyUlearnTechElement = whyUlearnTechRef.current;

        if (courseOverviewElement) {
            observer.observe(courseOverviewElement);
        }

        reasonItemsElements.forEach(item => {
            if (item) observer.observe(item);
        });

        if (projectsElement) {
            observer.observe(projectsElement);
        }

        if (whyUlearnTechElement) {
            observer.observe(whyUlearnTechElement);
        }

        return () => {
            if (courseOverviewElement) {
                observer.unobserve(courseOverviewElement);
            }
            reasonItemsElements.forEach(item => {
                if (item) observer.unobserve(item);
            });
            if (projectsElement) {
                observer.unobserve(projectsElement);
            }
            if (whyUlearnTechElement) {
                observer.unobserve(whyUlearnTechElement);
            }
        };
    }, []);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const projects = [
    { 
      title: 'Simple Calculator', 
      description: 'A basic calculator application built using C# and Windows Forms.', 
      code: `using System;
using System.Windows.Forms;

namespace SimpleCalculator
{
    public partial class Calculator : Form
    {
        public Calculator()
        {
            InitializeComponent();
        }

        private void btnAdd_Click(object sender, EventArgs e)
        {
            int num1 = int.Parse(txtNumber1.Text);
            int num2 = int.Parse(txtNumber2.Text);
            int result = num1 + num2;
            lblResult.Text = result.ToString();
        }

        private void btnSubtract_Click(object sender, EventArgs e)
        {
            int num1 = int.Parse(txtNumber1.Text);
            int num2 = int.Parse(txtNumber2.Text);
            int result = num1 - num2;
            lblResult.Text = result.ToString();
        }

        private void btnMultiply_Click(object sender, EventArgs e)
        {
            int num1 = int.Parse(txtNumber1.Text);
            int num2 = int.Parse(txtNumber2.Text);
            int result = num1 * num2;
            lblResult.Text = result.ToString();
        }

        private void btnDivide_Click(object sender, EventArgs e)
        {
            int num1 = int.Parse(txtNumber1.Text);
            int num2 = int.Parse(txtNumber2.Text);
            if (num2 != 0)
            {
                int result = num1 / num2;
                lblResult.Text = result.ToString();
            }
            else
            {
                lblResult.Text = "Cannot divide by zero";
            }
        }
    }
}`
    },
    { 
      title: 'Weather App', 
      description: 'An application that fetches and displays weather information using an API.', 
      code: `using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace WeatherApp
{
    class Program
    {
        static async Task Main(string[] args)
        {
            Console.WriteLine("Enter a city:");
            string city = Console.ReadLine();
            string apiKey = "YOUR_API_KEY"; // Replace with your actual API key
            string apiUrl = $"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}&units=metric";

            using (HttpClient client = new HttpClient())
            {
                HttpResponseMessage response = await client.GetAsync(apiUrl);
                if (response.IsSuccessStatusCode)
                {
                    string data = await response.Content.ReadAsStringAsync();
                    Console.WriteLine($"Weather data for {city}:");
                    Console.WriteLine(data);
                }
                else
                {
                    Console.WriteLine("Error fetching weather data.");
                }
            }
        }
    }
}`
    },
    { 
      title: 'Library Management System', 
      description: 'A system to manage library books and members, built with C# and Entity Framework.', 
      code: `using System;
using System.Collections.Generic;
using System.Data.Entity;

namespace LibraryManagementSystem
{
    public class Book
    {
        public int BookId { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
    }

    public class Member
    {
        public int MemberId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
    }

    public class LibraryContext : DbContext
    {
        public DbSet<Book> Books { get; set; }
        public DbSet<Member> Members { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            using (var context = new LibraryContext())
            {
                var book = new Book { Title = "C# Programming", Author = "John Doe" };
                context.Books.Add(book);
                context.SaveChanges();

                Console.WriteLine("Book saved successfully.");
            }
        }
    }
}`
    },
    { 
      title: 'Chat Application', 
      description: 'A simple chat application built using C# and SignalR.', 
      code: `using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;

namespace ChatApplication
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();
            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }

    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSignalR();
            services.AddControllersWithViews();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
                endpoints.MapHub<ChatHub>("/chatHub");
            });
        }
    }
}`
    }
  ];

  return (
    <div className="csharp-page">
      <Header />
      <div className="hero-section">
        <h1 className='c'>Master C# Programming</h1>
        <p>Become a C# developer by completing a variety of projects!</p>
        <Link to="/sharp" className="cta-button">Enroll now</Link>
      </div>

      <section className="course-overview" ref={courseOverviewRef}>
        <h2>Course Overview</h2>
        <p>This comprehensive C# course will take you from a beginner to an advanced level.</p>
        <p>Equipping you with the skills to build robust and efficient applications.</p>
        <h3>Who This Course Is For</h3>
        <p>This course is designed for:</p>
       
          <p>Beginners with basic programming knowledge</p>
          <p>Web developers looking to expand their backend skills</p>
          <p>Developers interested in enterprise-level applications</p>
          <p>Anyone looking to build dynamic applications</p>
        
      </section>

      <section className="why-csharp" ref={whyUlearnTechRef}>
        <h2>Why Learn C#</h2>
        <div className="reasons-grid">
          {[
            { icon: <FaCode />, title: "Versatile Language", description: "C# is used for web development, desktop applications, games, and more." },
            { icon: <FaLaptopCode />, title: "Object-Oriented", description: "C# supports object-oriented programming principles, making it a robust language for building scalable applications." },
            { icon: <FaChartLine />, title: "High Demand", description: "C# developers are in high demand, especially in enterprise and game development sectors." }
          ].map((reason, index) => (
            <div 
              key={index}
              className="reason-item"
              ref={el => reasonItemsRef.current[index] = el}
            >
              {reason.icon}
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="course-content">
        <h2>Course Content</h2>
        <div className="content-modules">
          <div className="module">
            <h3>C# Basics</h3>
            <ul>
              <li>Introduction to C#</li>
              <li>Variables and Data Types</li>
              <li>Operators and Expressions</li>
              <li>Control Flow Statements</li>
              <li>Methods and Arrays</li>
            </ul>
          </div>
          <div className="module">
            <h3>Advanced C#</h3>
            <ul>
              <li>Object-Oriented Programming</li>
              <li>Exception Handling</li>
              <li>File Handling</li>
              <li>LINQ</li>
              <li>Asynchronous Programming</li>
            </ul>
          </div>
          <div className="module">
            <h3>C# Frameworks</h3>
            <ul>
              <li>.NET Framework</li>
              <li>ASP.NET Core</li>
              <li>Entity Framework</li>
              <li>WPF</li>
              <li>Xamarin</li>
            </ul>
          </div>
          <div className="module">
            <h3>Other Important Areas</h3>
            <ul>
              <li>Design Patterns</li>
              <li>Testing with NUnit</li>
              <li>Dependency Injection</li>
              <li>Microservices</li>
              <li>Deployment</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="projects additional-section" ref={projectsRef}>
        <h2>Hands-on Projects</h2>
        <Slider {...sliderSettings}>
          {projects.map((project, index) => (
            <div key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ReadOnlyCodeSnippet code={project.code} />
            </div>
          ))}
        </Slider>
      </section>

      <section className="why-ulearntech additional-section" ref={whyUlearnTechRef}>
        <h2>Why Study at U-Learn Tech?</h2>
        <div className="reasons-container">
          {[
            { icon: <FaChalkboardTeacher />, title: "Comprehensive Curriculum", description: "Our courses cover the latest technologies and best practices, ensuring you stay ahead of the curve." },
            { icon: <FaHandsHelping />, title: "Hands-On Learning", description: "Engage in practical projects that give you the skills and confidence to succeed in your career." },
            { icon: <FaLaptopCode />, title: "Flexible Learning", description: "Study at your own pace with flexible schedules that fit your lifestyle." }
          ].map((reason, index) => (
            <div key={index} className="reason-card">
              {reason.icon}
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="enroll-section">
        <h2>Ready to Start Your C# Journey?</h2>
        <p>Enroll now and take the first step towards becoming a C# expert!</p>
        <Link to="/sharp" className="cta-button">Get Started</Link>
      </section>

    </div>
  );
};

export default CsharpPage;
