import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Về Tôi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Khám phá hành trình và đam mê của tôi trong lĩnh vực công nghệ
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="shadow-elegant border-0 bg-gradient-hero">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Thông Tin Cá Nhân
                </h3>
                <div className="space-y-3 text-foreground">
                  <p><strong>Tên:</strong> Nguyễn Văn A</p>
                  <p><strong>Tuổi:</strong> 25</p>
                  <p><strong>Vị trí:</strong> Frontend Developer</p>
                  <p><strong>Địa điểm:</strong> Hồ Chí Minh, Việt Nam</p>
                  <p><strong>Email:</strong> yourname@email.com</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant border-0 bg-gradient-hero">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Học Vấn
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">Cử Nhân Công Nghệ Thông Tin</h4>
                    <p className="text-muted-foreground">Đại học ABC • 2019-2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="shadow-elegant border-0 bg-gradient-hero">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Giới Thiệu
                </h3>
                <p className="text-foreground mb-4">
                  Tôi là một developer đam mê tạo ra những ứng dụng web hiện đại và thân thiện với người dùng. 
                  Với kinh nghiệm trong React, TypeScript và các công nghệ frontend tiên tiến.
                </p>
                <p className="text-foreground">
                  Tôi luôn tìm cách học hỏi và áp dụng những xu hướng mới nhất trong ngành công nghệ 
                  để mang lại giá trị tốt nhất cho dự án và khách hàng.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant border-0 bg-gradient-hero">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Sở Thích
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Lập trình</Badge>
                  <Badge variant="secondary">Thiết kế UI/UX</Badge>
                  <Badge variant="secondary">Đọc sách</Badge>
                  <Badge variant="secondary">Du lịch</Badge>
                  <Badge variant="secondary">Nhiếp ảnh</Badge>
                  <Badge variant="secondary">Game</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;